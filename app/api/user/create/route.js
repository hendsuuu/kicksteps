import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (request) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const password = formData.get("password");

  try {
    const response = await prisma.user.create({
      data: {
        name: name,
        password: password,
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
};

export { createUser as POST };
