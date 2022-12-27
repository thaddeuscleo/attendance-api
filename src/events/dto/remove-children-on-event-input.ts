import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RemoveChildrenOnEventInput {
  @Field(() => String, { description: 'Event ID' })
  id: string;

  @Field(() => [String], {
    description: 'ChildrenId list',
    defaultValue: [],
  })
  childrens: string[];
}
