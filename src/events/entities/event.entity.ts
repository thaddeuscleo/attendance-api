import { ObjectType, Field } from '@nestjs/graphql';
import { Children } from './../../childrens/entities/children.entity';

@ObjectType()
export class Event {
  @Field(() => String, { description: 'Event ID' })
  id: string;

  @Field(() => String, { description: 'Event name' })
  name: string;

  @Field(() => Date, { description: 'Event name' })
  startDateTime: Date;

  @Field(() => Date, { description: 'Event name' })
  endDateTime: Date;

  @Field(() => [Children], { description: 'List of childrens in a event' })
  childrens?: Children[];
}
