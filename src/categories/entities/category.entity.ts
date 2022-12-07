import { ObjectType, Field } from '@nestjs/graphql';
import { Children } from './../../childrens/entities/children.entity';

@ObjectType()
export class Category {
  @Field(() => String, { description: 'Category ID' })
  id: string;

  @Field(() => String, { description: 'Category name' })
  name: string;

  @Field(() => [Children], { description: 'Childrens in a category' })
  childrens: Children;
}
