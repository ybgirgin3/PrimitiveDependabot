import { CreateDependabotInput } from './create-dependabot.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDependabotInput extends PartialType(CreateDependabotInput) {
  @Field(() => Int)
  id: number;
}
