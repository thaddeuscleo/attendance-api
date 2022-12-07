import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  // Delete all children
  await prisma.children.deleteMany({});

  for (let idx = 0; idx < 10; idx++) {
    const fullname: string = faker.name.fullName();
    await prisma.children.create({
      data: {
        name: fullname,
        bornDate: new Date(),
        parentName: faker.name.fullName(),
        surname: fullname.split(' ')[0],
        categoryId: undefined
      },
    });
  }
};

main()
  .then(async () => {
    console.error('Seeding complete');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
