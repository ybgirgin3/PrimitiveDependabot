import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGithubRepoInput {
  @Field()
  owner: string;

  @Field()
  repoName: string;

  @Field()
  fileName: string;

  @Field(() => Int)
  personId: number;
}
