import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  // Delete all children
  await prisma.category.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.children.deleteMany({});
  await prisma.admin.deleteMany({});

  // Admin
  await prisma.admin.create({
    data: {
      name: 'admin',
      email: 'admin@email.com',
      password: 'password',
    },
  });

  // Categories
  const category = ['teens', 'toddlers', 'kids'];
  await prisma.category.createMany({
    data: [...category.map((name) => ({ name }))],
  });
  let categoryIdRes = await prisma.category.findMany({
    select: {
      id: true,
    },
  });
  let categoryIdList = [...categoryIdRes.map((data) => data.id)];

  // Events
  await prisma.event.createMany({
    data: [
      ...Array(12)
        .fill(1)
        .map(() => ({
          name: faker.animal.lion(),
          startDateTime: faker.date.past(),
          endDateTime: faker.date.future(),
        })),
    ],
  });

  let eventsIdRes = await prisma.event.findMany({
    select: {
      id: true,
    },
  });

  // Childrens
  await prisma.children.createMany({
    data: [
      ...Array(10)
        .fill(1)
        .map(() => ({
          name: faker.name.fullName(),
          bornDate: new Date(),
          parentName: faker.name.fullName(),
          surname: faker.name.fullName().split(' ')[0],
          categoryId: faker.helpers.arrayElement(categoryIdList),
        })),
    ],
  });

  let childrensIdRes = await prisma.children.findMany({
    select: {
      id: true,
    },
  });
  let childrens = [...childrensIdRes.map((data) => data.id)];

  childrens.forEach(async (id) => {
    await prisma.children.update({
      data: {
        events: {
          connect: eventsIdRes,
        },
      },
      where: {
        id,
      },
    });
  });
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
