-- CreateTable
CREATE TABLE `Cliente` (
    `num_persona` INTEGER NOT NULL,
    `name_persona` VARCHAR(191) NOT NULL,
    `ap_persona` VARCHAR(191) NOT NULL,
    `curp_persona` VARCHAR(191) NOT NULL,
    `email_persona` VARCHAR(191) NOT NULL,
    `tel_persona` VARCHAR(191) NOT NULL,
    `password_persona` VARCHAR(191) NULL,
    `status_persona` BOOLEAN NULL,

    PRIMARY KEY (`num_persona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
