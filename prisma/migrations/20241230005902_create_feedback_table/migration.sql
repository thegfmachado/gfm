-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "siteUrl" TEXT,
    "imageUrl" TEXT,
    "message" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "pinned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
