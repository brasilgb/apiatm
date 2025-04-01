-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_admin" TEXT NOT NULL,
    "roles" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT,
    "companyId" TEXT,
    CONSTRAINT "users_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "companies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "altername" TEXT,
    "corpreason" TEXT,
    "cnpj" TEXT NOT NULL,
    "subnumber" TEXT NOT NULL,
    "subname" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "telefone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "observation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT,
    CONSTRAINT "companies_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "logo" TEXT,
    "organizationId" TEXT,
    CONSTRAINT "settings_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "filial" TEXT NOT NULL,
    "descfilial" TEXT NOT NULL,
    "dtvenda" TEXT NOT NULL,
    "anomes" TEXT NOT NULL,
    "valdevolucao" TEXT NOT NULL,
    "valvenda" TEXT NOT NULL,
    "valmeta" TEXT NOT NULL,
    "margem" TEXT NOT NULL,
    "representa" TEXT NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "sales_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "associations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "filial" TEXT NOT NULL,
    "dtvenda" TEXT NOT NULL,
    "assoc" TEXT NOT NULL,
    "descassoc" TEXT NOT NULL,
    "valdevolucao" TEXT NOT NULL,
    "valvenda" TEXT NOT NULL,
    "valmeta" TEXT NOT NULL,
    "margem" TEXT NOT NULL,
    "representa" TEXT NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "associations_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "totals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "filial" TEXT NOT NULL,
    "datatu" TEXT NOT NULL,
    "valdev" TEXT NOT NULL,
    "valven" TEXT NOT NULL,
    "margem" TEXT NOT NULL,
    "permet" TEXT NOT NULL,
    "projec" TEXT NOT NULL,
    "valjur" TEXT NOT NULL,
    "perjur" TEXT NOT NULL,
    "valina" TEXT NOT NULL,
    "perina" TEXT NOT NULL,
    "valest" TEXT NOT NULL,
    "valmeta" TEXT NOT NULL,
    "organizationId" TEXT,
    CONSTRAINT "totals_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
