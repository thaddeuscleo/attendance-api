import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdminInput } from './dto/create-admin.input';
import { UpdateAdminInput } from './dto/update-admin.input';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAdminInput: CreateAdminInput) {
    return 'This action adds a new admin';
  }

  findAll() {
    return `This action returns all admins`;
  }

  findOne(id: string) {
    return this.prisma.admin.findUnique({
      where: {
        id,
      },
    });
  }

  update({ id, email, name }: UpdateAdminInput) {
    return this.prisma.admin.update({
      data: {
        email,
        name,
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.admin.delete({
      where: {
        id,
      },
    });
  }
}
