import { CreateGithubRepoInput } from './create-github-repo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGithubRepoInput extends PartialType(CreateGithubRepoInput) {
  @Field(() => Int)
  id: number;
}
