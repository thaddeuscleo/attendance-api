import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field(() => String, { description: 'Event name' })
  name: string;

  @Field(() => Date, { description: 'Event name' })
  startDateTime: Date;

  @Field(() => Date, { description: 'Event name' })
  endDateTime: Date;

  @Field(() => [String], {
    description: 'ChildrenId list',
    nullable: true,
    defaultValue: [],
  })
  childrens?: string[];
}
