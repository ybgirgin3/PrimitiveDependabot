import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GithubRepoService } from './github-repo.service';
import { GithubRepo } from './entities/github-repo.entity';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';
import { UpdateGithubRepoInput } from './dto/update-github-repo.input';

@Resolver(() => GithubRepo)
export class GithubRepoResolver {
  constructor(private readonly githubRepoService: GithubRepoService) {}

  @Mutation(() => GithubRepo)
  createGithubRepo(
    @Args('createGithubRepoInput') createGithubRepoInput: CreateGithubRepoInput,
  ) {
    return this.githubRepoService.create(createGithubRepoInput);
  }

  @Query(() => [GithubRepo])
  findAllGithubRepos() {
    return this.githubRepoService.findAll();
  }

  @Query(() => GithubRepo)
  findOneGithubRepo(@Args('id', { type: () => Int }) id: number) {
    return this.githubRepoService.findOne(id);
  }

  @Mutation(() => GithubRepo)
  updateGithubRepo(
    @Args('updateGithubRepoInput') updateGithubRepoInput: UpdateGithubRepoInput,
  ) {
    return this.githubRepoService.update(
      updateGithubRepoInput.id,
      updateGithubRepoInput,
    );
  }

  @Mutation(() => GithubRepo)
  removeGithubRepo(@Args('id', { type: () => Int }) id: number) {
    return this.githubRepoService.remove(id);
  }
}
