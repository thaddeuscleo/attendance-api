import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateChildrenInput {
  @Field(() => String, { description: 'Children ID' })
  name: string;

  @Field(() => Date, {
    description: 'Children borndate',
    defaultValue: undefined,
  })
  bornDate: Date;

  @Field(() => String, { description: 'Children parent name' })
  parentName: string;

  @Field(() => String, { description: 'Children surname' })
  surname: string;

  @Field(() => String, { description: 'Children category' })
  categoryId: string;
}
