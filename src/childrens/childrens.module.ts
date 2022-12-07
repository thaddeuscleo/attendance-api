import { Module } from '@nestjs/common';
import { ChildrensService } from './childrens.service';
import { ChildrensResolver } from './childrens.resolver';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ChildrensResolver, ChildrensService]
})
export class ChildrensModule {}
