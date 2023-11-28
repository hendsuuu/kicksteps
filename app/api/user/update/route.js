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
  } catch (error) {}
};
