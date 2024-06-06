-- AlterTable
ALTER TABLE `Products` MODIFY `price` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `Orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NULL,
    `email` VARCHAR(191) NULL,
    `type` VARCHAR(225) NULL,
    `date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `amount` INTEGER NULL,
    `status` ENUM('Waiting', 'Fullfiled', 'Decline') NOT NULL DEFAULT 'Waiting',
    `tel` INTEGER NULL,

    UNIQUE INDEX `Orders_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
