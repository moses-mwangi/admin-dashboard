/*
  Warnings:

  - The values [Fullfiled,Decline] on the enum `Orders_status` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `name` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `Orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tel` on table `Orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Orders` MODIFY `name` VARCHAR(225) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `type` ENUM('Sales', 'Refund', 'Subscription') NOT NULL DEFAULT 'Subscription',
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `amount` INTEGER NOT NULL,
    MODIFY `status` ENUM('Fullfilled', 'Waiting', 'Declined') NOT NULL DEFAULT 'Waiting',
    MODIFY `tel` VARCHAR(20) NOT NULL;
