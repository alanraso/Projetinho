import * as bcrypt from 'bcrypt';
import { prisma } from './setup-database.js';

const HASH_ROUNDS = 10;

interface UserInput {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

export const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
  Mutation: {
    createUser: async (_, args: { data: UserInput }) => {
      const { name, email, password, birthDate } = args.data;

      const encryptedPassword = await bcrypt.hash(password, HASH_ROUNDS);

      return prisma.user.create({
        data: { name, email, password: encryptedPassword, birthDate },
      });
    },
  },
};
