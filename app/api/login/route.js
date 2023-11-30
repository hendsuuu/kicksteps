import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Login = async (request) => {
  try {
    const data = await request.json();
    console.log(data);
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
      select: {
        password: true,
      },
    });

    // if (user > 1) {
    //   const match = await prisma.user.findUnique({});
    // }

    return new Response("berhasil Login", {
      status: 200,
    });
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
};

export { Login as POST };
