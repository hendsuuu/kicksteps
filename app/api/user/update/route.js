import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateUser = async (request) => {
  try {
    const { id, username, password } = await request.json();
    const response = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username: username,
        password: password,
      },
    });

    return new Response("berhasil update user",{
      status:200
    })
  } catch (error) {
    return new Response("gagal update user",{
      status:500
    })
  }
};

export {updateUser as PATCH}