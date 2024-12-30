import { PrismaClient } from "@prisma/client";

const createPrismaClientSingleton = () => new PrismaClient();

// This ensures TypeScript knows about globalThis object includes a custom property `prismaGlobal`.
declare const globalThis: {
  prismaGlobal: ReturnType<typeof createPrismaClientSingleton>;
} & typeof global;

// Create or reuse the existing PrismaClient instance
const prisma = globalThis.prismaGlobal ?? createPrismaClientSingleton();

// In development mode, ensure the PrismaClient instance is stored in `globalThis.prismaGlobal`.
// This prevents multiple instances from being created during module hot reloading.
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export { prisma };
