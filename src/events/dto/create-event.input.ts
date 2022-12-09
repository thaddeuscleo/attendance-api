import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
