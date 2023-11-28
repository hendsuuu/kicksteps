import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Login = async (request) => {
  try {
    const { username, password } = await request.json();
    // console.log(username);
    const user = await prisma.user.findFirst({
      where: {
        name: username,
        password: password,
      },
    });

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
