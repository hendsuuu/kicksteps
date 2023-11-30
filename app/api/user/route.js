import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const response = await prisma.user.findMany();

    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    const match = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (match > 0)
      return new Response("Maaf Email Anda Sudah terdaftar", {
        status: 500,
      });

    if (data.username == "" && data.confPass == "" && data.password == "")
      return new Response("Lengkapi data terlebih dahulu", {
        status: 500,
        title: "Gagal Register",
        desc: "Isi Data Terlebih Dahulu",
      });
    if (data.password != data.confPass)
      return new Response("maaf konfirmasi password salah", {
        status: 500,
        title: "Gagal Register",
        desc: "Password Tidak Cocok",
      });

    const response = await prisma.user.create({
      data: {
        name: data.username,
        password: data.password,
        email: data.email,
      },
    });

    if (response) {
      return new Response("berhasil create User", {
        status: 200,
        title: "Gagal Register",
        desc: "Ada Yang salah coba lagi",
      });
    }
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
}

export async function PATCH(request) {
  try {
    const data = await request.json();
    const match = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (match > 0)
      return new Response("Maaf Email Anda Sudah terdaftar", {
        status: 500,
      });
    // console.log(data);
    const response = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        email: data.email,
      },
    });

    return new Response("berhasil update user", {
      status: 200,
    });
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const id = await request.json();
    console.log(id);
    const response = await prisma.user.delete({
      where: {
        id: id.id,
      },
    });

    return new Response("berhasil Delete User", {
      data: json(response),
      status: 200,
    });
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
}
