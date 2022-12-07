-- DropForeignKey
ALTER TABLE "Children" DROP CONSTRAINT "Children_categoryId_fkey";

-- AlterTable
ALTER TABLE "Children" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Children" ADD CONSTRAINT "Children_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
