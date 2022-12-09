import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  create({ name }: CreateEventInput) {
    return this.prisma.event.create({
      data: {
        name,
      },
    });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: string) {
    return this.prisma.event.findFirst({
      where: {
        id,
      },
    });
  }

  update({ id, name }: UpdateEventInput) {
    return this.prisma.event.update({
      where: {
        id,
      },
      data: {
        name,
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
