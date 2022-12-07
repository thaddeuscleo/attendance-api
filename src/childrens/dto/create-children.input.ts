import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChildrenInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
