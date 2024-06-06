-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `state` VARCHAR(100) NOT NULL,
    `postalCode` VARCHAR(20) NOT NULL,
    `country` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `customers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
