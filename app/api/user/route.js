import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUser = async () => {
  try {
    const response = await prisma.user.findMany();

    // console.log(JSON.stringify(response));
    return new Response(JSON.stringify(response));
    // return new Response.json({
    //   data: response,
    //   status: 200,
    //   description: "berhasil fetch data",
    // });
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
};

export { getAllUser as GET };
