import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGithubRepoInput {
  @Field()
  name: string;

  @Field()
  url: string;
}
