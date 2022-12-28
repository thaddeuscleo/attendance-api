import { CreateAdminInput } from './create-admin.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdminInput extends PartialType(CreateAdminInput) {
  @Field(() => String)
  id: string;
}
