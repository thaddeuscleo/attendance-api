import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  // Delete all children
  await prisma.category.deleteMany({});
  await prisma.children.deleteMany({});

  const category = ['teens', 'toddlers', 'kids']
  

  await prisma.category.createMany({
    data: [...category.map((name) => ({name}))]
  })

  let categoryIdRes = await prisma.category.findMany({
    select: {
      id: true
    }
  })

  let categoryIdList = [...categoryIdRes.map((data) => (data.id))]

  for (let idx = 0; idx < 10; idx++) {
    const fullname: string = faker.name.fullName();
    await prisma.children.create({
      data: {
        name: fullname,
        bornDate: new Date(),
        parentName: faker.name.fullName(),
        surname: fullname.split(' ')[0],
        categoryId: faker.helpers.arrayElement(categoryIdList)
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
