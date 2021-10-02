/*
  Warnings:

  - You are about to drop the column `filmeId` on the `genero` table. All the data in the column will be lost.
  - You are about to drop the column `filmeId` on the `participante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genero` DROP FOREIGN KEY `Genero_filmeId_fkey`;

-- DropForeignKey
ALTER TABLE `participante` DROP FOREIGN KEY `Participante_filmeId_fkey`;

-- AlterTable
ALTER TABLE `genero` DROP COLUMN `filmeId`;

-- AlterTable
ALTER TABLE `participante` DROP COLUMN `filmeId`;

-- CreateTable
CREATE TABLE `_FilmeToGenero` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToGenero_AB_unique`(`A`, `B`),
    INDEX `_FilmeToGenero_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToParticipante` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToParticipante_AB_unique`(`A`, `B`),
    INDEX `_FilmeToParticipante_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`A`) REFERENCES `filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`B`) REFERENCES `genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`A`) REFERENCES `filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`B`) REFERENCES `participante`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
