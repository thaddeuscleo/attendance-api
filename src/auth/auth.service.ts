import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from 'src/admins/entities/admin.entity';
import { LoginAdminInput } from './../admins/dto/login-admin.input';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string; name: string } | undefined> {
    const admin = await this.prisma.admin.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (admin) {
      return admin;
    }

    return undefined;
  }

  async login({ email, password }: LoginAdminInput) {
    const {name} = await this.validateAdmin(email, password);

    if (name) {
      return this.jwtService.sign({
        email,
        name,
      });
    }

    return undefined;
  }
}
