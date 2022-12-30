import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventInput } from './dto/create-event.input';
import { RemoveChildrenOnEventInput } from './dto/remove-children-on-event-input';
import { UpdateEventInput } from './dto/update-event.input';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  create({ name, startDateTime, endDateTime }: CreateEventInput) {
    return this.prisma.event.create({
      data: {
        name,
        startDateTime,
        endDateTime,
      },
    });
  }

  findAll(skip: number, take: number) {
    return this.prisma.event.findMany({
      skip,
      take,
      orderBy: {
        startDateTime: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.event.findFirst({
      where: {
        id,
      },
    });
  }

  update({ id, name, childrens }: UpdateEventInput) {
    return this.prisma.event.update({
      where: {
        id,
      },
      data: {
        name,
        childrens: {
          connect: [...childrens.map((id) => ({ id }))],
        },
      },
    });
  }

  async removeChildrenConnection({
    id,
    childrens,
  }: RemoveChildrenOnEventInput) {
    return await this.prisma.event.update({
      where: {
        id,
      },
      data: {
        childrens: {
          disconnect: [...childrens.map((id) => ({ id }))],
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.event.delete({
      where: {
        id,
      },
    });
  }

  findChildrensInEvent(id: string) {
    return this.prisma.children.findMany({
      where: {
        events: {
          some: {
            id,
          },
        },
      },
    });
  }
}
