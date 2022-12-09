import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Admin {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
