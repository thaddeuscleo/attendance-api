import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create({ name }: CreateCategoryInput) {
    return this.prisma.category.create({
      data: {
        name,
      },
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: string) {
    return this.prisma.category.findFirst({
      where: {
        id,
      },
    });
  }

  update({ id, name }: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: {
        id,
      },
    });
  }

  findChildrenInCategory(categoryId: string) {
    return this.prisma.children.findMany({
      where: {
        categoryId,
      },
    });
  }
}
