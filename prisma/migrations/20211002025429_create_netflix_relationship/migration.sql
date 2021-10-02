/*
  Warnings:

  - You are about to drop the `_filmetogenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_filmetoparticipante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_filmetogenero` DROP FOREIGN KEY `_filmetogenero_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_filmetogenero` DROP FOREIGN KEY `_filmetogenero_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_filmetoparticipante` DROP FOREIGN KEY `_filmetoparticipante_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_filmetoparticipante` DROP FOREIGN KEY `_filmetoparticipante_ibfk_2`;

-- AlterTable
ALTER TABLE `genero` ADD COLUMN `filme_id` INTEGER;

-- AlterTable
ALTER TABLE `participante` ADD COLUMN `filme_id` INTEGER;

-- DropTable
DROP TABLE `_filmetogenero`;

-- DropTable
DROP TABLE `_filmetoparticipante`;

-- AddForeignKey
ALTER TABLE `participante` ADD CONSTRAINT `participante_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genero` ADD CONSTRAINT `genero_filme_id_fkey` FOREIGN KEY (`filme_id`) REFERENCES `filme`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
