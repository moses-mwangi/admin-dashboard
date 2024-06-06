/*
  Warnings:

  - Made the column `name` on table `Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `name` VARCHAR(225) NOT NULL,
    MODIFY `price` INTEGER NOT NULL;
