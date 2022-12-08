import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
