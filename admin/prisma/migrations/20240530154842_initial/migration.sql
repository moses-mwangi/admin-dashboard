-- CreateTable
CREATE TABLE `Issue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NULL,
    `status` ENUM('Active', 'Draft') NOT NULL DEFAULT 'Active',
    `price` INTEGER NULL,
    `totalSales` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
