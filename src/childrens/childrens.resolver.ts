import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ChildrensService } from './childrens.service';
import { Children } from './entities/children.entity';
import { CreateChildrenInput } from './dto/create-children.input';
import { UpdateChildrenInput } from './dto/update-children.input';
import { Category } from './../categories/entities/category.entity';

@Resolver(() => Children)
export class ChildrensResolver {
  constructor(private readonly childrensService: ChildrensService) {}

  @Mutation(() => Children)
  createChildren(
    @Args('createChildrenInput') createChildrenInput: CreateChildrenInput,
  ) {
    return this.childrensService.create(createChildrenInput);
  }

  @Query(() => [Children], { name: 'childrens' })
  findAll() {
    return this.childrensService.findAll();
  }

  @Query(() => Children, { name: 'children' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.childrensService.findOne(id);
  }

  @Mutation(() => Children)
  updateChildren(
    @Args('updateChildrenInput') updateChildrenInput: UpdateChildrenInput,
  ) {
    return this.childrensService.update(updateChildrenInput);
  }

  @Mutation(() => Children)
  removeChildren(@Args('id', { type: () => String }) id: string) {
    return this.childrensService.remove(id);
  }

  @ResolveField(() => Category)
  category(@Parent() children: Children) {
    return this.childrensService.findChildrenCategory(children.id);
  }
}
