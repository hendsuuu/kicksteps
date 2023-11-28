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
  const data = await request.json();

  if (data.password != data.confPass)
    return new Response("maaf konfirmasi password salah", {
      status: 500,
    });

  try {
    const response = await prisma.user.create({
      data: {
        name: data.username,
        password: data.password,
      },
    });

    if (response) {
      return new Response("berhasil create User", {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  try {
    const id = await request.json();
    // const id = await request.url.slice(request.url.lastIndexOf("/") + 1);
    console.log(id.id);
    const response = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return new Response(console.log(id), {
      data: json(response),
      status: 200,
    });
  } catch (error) {
    return new Response(console.log(id), {
      status: 500,
    });
  }
}
