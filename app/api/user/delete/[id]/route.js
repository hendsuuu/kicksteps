import { PrismaClient } from "@prisma/client";
import { json } from "react-router-dom";
const prisma = new PrismaClient();

const deleteUser = async (request) => {
  try {
    const id = await request.url.slice(request.url.lastIndexOf("/") + 1);
    console.log(id);
    const response = await prisma.user.delete({
      where: {
        id: parseInt(id),
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
};

export { deleteUser as DELETE };
