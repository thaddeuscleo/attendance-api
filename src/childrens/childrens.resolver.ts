import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChildrensService } from './childrens.service';
import { Children } from './entities/children.entity';
import { CreateChildrenInput } from './dto/create-children.input';
import { UpdateChildrenInput } from './dto/update-children.input';

@Resolver(() => Children)
export class ChildrensResolver {
  constructor(private readonly childrensService: ChildrensService) {}

  @Mutation(() => Children)
  createChildren(@Args('createChildrenInput') createChildrenInput: CreateChildrenInput) {
    return this.childrensService.create(createChildrenInput);
  }

  @Query(() => [Children], { name: 'childrens' })
  findAll() {
    return this.childrensService.findAll();
  }

  @Query(() => Children, { name: 'children' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.childrensService.findOne(id);
  }

  @Mutation(() => Children)
  updateChildren(@Args('updateChildrenInput') updateChildrenInput: UpdateChildrenInput) {
    return this.childrensService.update(updateChildrenInput.id, updateChildrenInput);
  }

  @Mutation(() => Children)
  removeChildren(@Args('id', { type: () => Int }) id: number) {
    return this.childrensService.remove(id);
  }
}
