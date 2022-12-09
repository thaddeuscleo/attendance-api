/*
  Warnings:

  - You are about to drop the column `eventId` on the `Children` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Children" DROP CONSTRAINT "Children_eventId_fkey";

-- AlterTable
ALTER TABLE "Children" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "_ChildrenToEvent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChildrenToEvent_AB_unique" ON "_ChildrenToEvent"("A", "B");

-- CreateIndex
CREATE INDEX "_ChildrenToEvent_B_index" ON "_ChildrenToEvent"("B");

-- AddForeignKey
ALTER TABLE "_ChildrenToEvent" ADD CONSTRAINT "_ChildrenToEvent_A_fkey" FOREIGN KEY ("A") REFERENCES "Children"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChildrenToEvent" ADD CONSTRAINT "_ChildrenToEvent_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
