import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Children {
  @Field(() => String, { description: 'Children ID' })
  id: string;

  @Field(() => String, { description: 'Children name' })
  name: string;

  @Field(() => String, { description: 'Children surname' })
  surname: string;

  @Field(() => String, { description: 'Children parent name' })
  parentName: string;

  @Field(() => Date, { description: 'Children borndate' })
  bornDate: Date;
}
