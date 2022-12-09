import { ObjectType, Field } from '@nestjs/graphql';
import { Event } from 'src/events/entities/event.entity';
import { Category } from './../../categories/entities/category.entity';

@ObjectType()
export class Children {
  @Field(() => String, { description: 'Children ID' })
  id: string;

  @Field(() => String, { description: 'Children name' })
  name: string;

  @Field(() => String, { description: 'Children surname' })
  surname: string;

  @Field(() => String, { description: 'Children parent name' })
  parentName: string;

  @Field(() => Date, { description: 'Children borndate' })
  bornDate: Date;

  @Field(() => Category, { description: 'Children category' })
  category?: Category;

  @Field(() => [Event], { description: 'Events attended by the children' })
  events?: Event[];
}
