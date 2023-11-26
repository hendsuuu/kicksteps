import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteUser = async () => {
  const id = Request.params();
  try {
    const response = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    // console.log(JSON.stringify(response));
    return new Response("berhasil hapus user", {
      status: 200,
    });
  } catch (error) {
    return new Response(console.log(error), {
      status: 500,
    });
  }
};

export { deleteUser as DELETE };
