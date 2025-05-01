-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `is_admin` BOOLEAN NOT NULL,
    `roles` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `organizationId` VARCHAR(191) NULL,
    `companyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organizations` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` VARCHAR(191) NOT NULL,
    `corpreason` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `subnumber` VARCHAR(191) NOT NULL,
    `subname` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NULL,
    `street` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,
    `complement` VARCHAR(191) NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `whatsapp` VARCHAR(191) NULL,
    `observation` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `organizationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `settings` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `organizationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `id` VARCHAR(191) NOT NULL,
    `resumo_cnpj` VARCHAR(191) NOT NULL,
    `resumo_codfil` VARCHAR(191) NOT NULL,
    `resumo_desfil` VARCHAR(191) NOT NULL,
    `resumo_datmvt` VARCHAR(191) NOT NULL,
    `resumo_valdev` VARCHAR(191) NOT NULL,
    `resumo_valven` VARCHAR(191) NOT NULL,
    `resumo_margem` VARCHAR(191) NOT NULL,
    `resumo_presen` VARCHAR(191) NOT NULL,
    `resumo_metdia` VARCHAR(191) NOT NULL,
    `organizationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `associations` (
    `id` VARCHAR(191) NOT NULL,
    `assoc_cnpj` VARCHAR(191) NOT NULL,
    `assoc_filial` VARCHAR(191) NOT NULL,
    `assoc_datmvt` VARCHAR(191) NOT NULL,
    `assoc_ass` VARCHAR(191) NOT NULL,
    `assoc_desass` VARCHAR(191) NOT NULL,
    `assoc_valdev` VARCHAR(191) NOT NULL,
    `assoc_valven` VARCHAR(191) NOT NULL,
    `assoc_margem` VARCHAR(191) NOT NULL,
    `assoc_repres` VARCHAR(191) NOT NULL,
    `assoc_metdia` VARCHAR(191) NOT NULL,
    `organizationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `totals` (
    `id` VARCHAR(191) NOT NULL,
    `total_cnpj` VARCHAR(191) NOT NULL,
    `total_datatu` VARCHAR(191) NOT NULL,
    `total_filial` VARCHAR(191) NOT NULL,
    `total_valdev` VARCHAR(191) NOT NULL,
    `total_valven` VARCHAR(191) NOT NULL,
    `total_margem` VARCHAR(191) NOT NULL,
    `total_permet` VARCHAR(191) NOT NULL,
    `total_projec` VARCHAR(191) NOT NULL,
    `total_valjur` VARCHAR(191) NOT NULL,
    `total_perjur` VARCHAR(191) NOT NULL,
    `total_valina` VARCHAR(191) NOT NULL,
    `total_perina` VARCHAR(191) NOT NULL,
    `total_valest` VARCHAR(191) NOT NULL,
    `total_meta` VARCHAR(191) NOT NULL,
    `organizationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `companies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies` ADD CONSTRAINT `companies_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `settings` ADD CONSTRAINT `settings_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `sales_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `associations` ADD CONSTRAINT `associations_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `totals` ADD CONSTRAINT `totals_organizationId_fkey` FOREIGN KEY (`organizationId`) REFERENCES `organizations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
