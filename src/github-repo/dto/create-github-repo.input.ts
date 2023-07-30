import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGithubRepoInput {
  @Field()
  url: string;

  @Field(() => Int)
  personId: number;
}
