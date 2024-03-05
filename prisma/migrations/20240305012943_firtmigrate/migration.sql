-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "clientId" INTEGER,
    CONSTRAINT "users_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "views" INTEGER,
    "type" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "clientId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadted_at" DATETIME NOT NULL,
    CONSTRAINT "tickets_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "views" INTEGER,
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
