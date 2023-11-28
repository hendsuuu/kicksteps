import { PrismaClient } from "@prisma/client";
// import { useRouter } from "next/router";
import { json } from "react-router-dom";
// import { useRouter } from "next/router";

const prisma = new PrismaClient();

const deleteUser = async (req,res) => {
  // const route = useRouter();
  const id = parseInt(req.params.id);
  try {
    const response = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    // console.log(JSON.stringify(response));
    return new Response("berhasil hapus user", {
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
