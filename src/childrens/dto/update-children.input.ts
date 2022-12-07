import { CreateChildrenInput } from './create-children.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChildrenInput extends PartialType(CreateChildrenInput) {
  @Field(() => String)
  id: string;
}
