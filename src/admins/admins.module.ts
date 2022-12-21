import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsResolver } from './admins.resolver';
import { AuthModule } from './../auth/auth.module';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule],
  providers: [AdminsResolver, AdminsService],
})
export class AdminsModule {}
