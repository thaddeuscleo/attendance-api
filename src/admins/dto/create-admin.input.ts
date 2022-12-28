import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
