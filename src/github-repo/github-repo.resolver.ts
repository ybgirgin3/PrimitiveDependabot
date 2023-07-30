import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GithubRepoService } from './github-repo.service';
import { GithubRepo } from './entities/github-repo.entity';
import { CreateGithubRepoInput } from './dto/create-github-repo.input';
import { UpdateGithubRepoInput } from './dto/update-github-repo.input';
import { Person } from '../person/entities/person.entity';

@Resolver(() => GithubRepo)
export class GithubRepoResolver {
  constructor(private readonly githubRepoService: GithubRepoService) {}

  @Mutation(() => GithubRepo)
  createRepo(
    @Args('createGithubRepoInput') createGithubRepoInput: CreateGithubRepoInput,
  ) {
    return this.githubRepoService.create(createGithubRepoInput);
  }

  @Query(() => [GithubRepo])
  getRepos() {
    return this.githubRepoService.findAll();
  }

  @Query(() => GithubRepo)
  getRepo(@Args('id', { type: () => Int }) id: number) {
    return this.githubRepoService.findOne(id);
  }

  @Mutation(() => GithubRepo)
  updateRepo(
    @Args('updateGithubRepoInput') updateGithubRepoInput: UpdateGithubRepoInput,
  ) {
    return this.githubRepoService.update(
      updateGithubRepoInput.id,
      updateGithubRepoInput,
    );
  }

  @Mutation(() => GithubRepo)
  removeRepo(@Args('id', { type: () => Int }) id: number) {
    return this.githubRepoService.remove(id);
  }

  @ResolveField()
  person(@Parent() repo: GithubRepo): Promise<Person[]> {
    return this.githubRepoService.getPerson(repo.personId);
  }
}
