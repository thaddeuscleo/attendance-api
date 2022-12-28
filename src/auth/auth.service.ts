import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    const user = await this.validateAdmin(email, password);

    if (user) {
      return this.jwtService.sign({
        id: user.id,
      });
    }

    return undefined;
  }
}
