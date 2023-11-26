import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const { username, password } = req.body;

export const createUser = await prisma.user.update({
  data: {
    username: username,
    password: password,
  },
});
