-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_locationId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "imageUrl" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "locationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
