import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateChildrenInput } from './dto/create-children.input';
import { UpdateChildrenInput } from './dto/update-children.input';

@Injectable()
export class ChildrensService {
  constructor(private readonly prisma: PrismaService) {}

  create({
    name,
    bornDate,
    categoryId,
    parentName,
    surname,
  }: CreateChildrenInput) {
    return this.prisma.children.create({
      data: {
        name,
        bornDate,
        parentName,
        surname,
        categoryId,
      },
    });
  }

  findAll() {
    return this.prisma.children.findMany();
  }

  findOne(id: string) {
    return this.prisma.children.findFirst({
      where: {
        id,
      },
    });
  }

  update({
    id,
    name,
    bornDate,
    categoryId,
    parentName,
    surname,
  }: UpdateChildrenInput) {
    return this.prisma.children.update({
      where: {
        id,
      },
      data: {
        name,
        bornDate,
        categoryId,
        parentName,
        surname,
      },
    });
  }

  remove(id: string) {
    return this.prisma.children.delete({
      where: {
        id,
      },
    });
  }

  async findChildrenCategory(childrenId: string) {
    return await this.prisma.category.findFirst({
      where: {
        childrens: {
          some: {
            id: childrenId,
          },
        },
      },
    });
  }
}
