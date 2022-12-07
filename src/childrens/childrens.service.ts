import { Injectable } from '@nestjs/common';
import { CreateChildrenInput } from './dto/create-children.input';
import { UpdateChildrenInput } from './dto/update-children.input';

@Injectable()
export class ChildrensService {
  create(createChildrenInput: CreateChildrenInput) {
    return 'This action adds a new children';
  }

  findAll() {
    return `This action returns all childrens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} children`;
  }

  update(id: number, updateChildrenInput: UpdateChildrenInput) {
    return `This action updates a #${id} children`;
  }

  remove(id: number) {
    return `This action removes a #${id} children`;
  }
}
