import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

const mockDb = {
  users: {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Doe" },
  },
  posts: [
    { id: 1, name: "First post", authorId: 1 },
    { id: 2, name: "Second post", authorId: 1 },
  ],
} as const;

export const postRouter = createTRPCRouter({
  getPosts: protectedProcedure.query(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockDb.posts;
  }),
  getPostAuthor: protectedProcedure
    .input(z.object({ userId: z.union([z.literal(1), z.literal(2)]) }))
    .query(async ({ input: { userId } }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return mockDb.users[userId];
    }),
});
