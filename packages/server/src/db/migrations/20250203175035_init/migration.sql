-- CreateTable
CREATE TABLE "MaintenanceTicket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "urgency" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "resolvedAt" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
