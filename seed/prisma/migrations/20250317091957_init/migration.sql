-- CreateTable
CREATE TABLE "BasicData" (
    "id" TEXT NOT NULL,
    "Volt" TEXT,
    "Current" TEXT,
    "Power" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id")
);
