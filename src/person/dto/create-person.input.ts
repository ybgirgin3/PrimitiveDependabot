import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field()
  email: string;

  // @Field(() => Int)
  // repoId: number;
}
