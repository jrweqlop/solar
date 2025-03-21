-- CreateTable
CREATE TABLE "BasicData" (
    "id" TEXT NOT NULL,
    "Volt" TEXT,
    "Current" TEXT,
    "Power" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BasicData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataAllHvInverter" (
    "id" SERIAL NOT NULL,
    "statusInverterOn" BOOLEAN NOT NULL,
    "volt_in" DOUBLE PRECISION NOT NULL,
    "current_in" DOUBLE PRECISION NOT NULL,
    "power_in" DOUBLE PRECISION NOT NULL,
    "Energy_in" DOUBLE PRECISION NOT NULL,
    "volt_out" DOUBLE PRECISION NOT NULL,
    "current_out" DOUBLE PRECISION NOT NULL,
    "power_out" DOUBLE PRECISION NOT NULL,
    "Energy_out" DOUBLE PRECISION NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,
    "createAted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataAllHvInverter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataAllMpptSolarCharger" (
    "id" SERIAL NOT NULL,
    "modeWorkingEnabled" BOOLEAN NOT NULL,
    "statusCharge" BOOLEAN NOT NULL,
    "volt_in_solar" DOUBLE PRECISION NOT NULL,
    "current_in_solar" DOUBLE PRECISION NOT NULL,
    "power_in_solar" DOUBLE PRECISION NOT NULL,
    "Energy_in_solar" DOUBLE PRECISION NOT NULL,
    "volt_out_battery" DOUBLE PRECISION NOT NULL,
    "current_out_battery" DOUBLE PRECISION NOT NULL,
    "power_out_battery" DOUBLE PRECISION NOT NULL,
    "Energy_out_battery" DOUBLE PRECISION NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,
    "createAted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DataAllMpptSolarCharger_pkey" PRIMARY KEY ("id")
);
