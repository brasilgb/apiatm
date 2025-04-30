/*
  Warnings:

  - You are about to alter the column `is_admin` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `companies` MODIFY `district` VARCHAR(191) NULL,
    MODIFY `street` VARCHAR(191) NULL,
    MODIFY `number` VARCHAR(191) NULL,
    MODIFY `whatsapp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `is_admin` BOOLEAN NOT NULL;
