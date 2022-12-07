import { Module } from '@nestjs/common';
import { ChildrensService } from './childrens.service';
import { ChildrensResolver } from './childrens.resolver';

@Module({
  providers: [ChildrensResolver, ChildrensService]
})
export class ChildrensModule {}
