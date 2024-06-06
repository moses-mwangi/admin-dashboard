-- AlterTable
ALTER TABLE `Products` MODIFY `status` ENUM('Active', 'Draft', 'Archived') NOT NULL DEFAULT 'Active';
