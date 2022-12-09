import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginAdminInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;
}
