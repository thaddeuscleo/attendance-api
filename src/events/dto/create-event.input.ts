import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field(() => String, { description: 'Event name' })
  name: string;

  @Field(() => [String], {
    description: 'ChildrenId list',
    nullable: true,
    defaultValue: [],
  })
  childrens?: string[];
}
