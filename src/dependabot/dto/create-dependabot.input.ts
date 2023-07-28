import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDependabotInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
