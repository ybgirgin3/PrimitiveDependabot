import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DependabotService } from './dependabot.service';
import { Dependabot } from './entities/dependabot.entity';
import { CreateDependabotInput } from './dto/create-dependabot.input';
import { UpdateDependabotInput } from './dto/update-dependabot.input';

@Resolver(() => Dependabot)
export class DependabotResolver {
  constructor(private readonly dependabotService: DependabotService) {}

  @Mutation(() => Dependabot)
  createDependabot(@Args('createDependabotInput') createDependabotInput: CreateDependabotInput) {
    return this.dependabotService.create(createDependabotInput);
  }

  @Query(() => [Dependabot], { name: 'dependabot' })
  findAll() {
    return this.dependabotService.findAll();
  }

  @Query(() => Dependabot, { name: 'dependabot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dependabotService.findOne(id);
  }

  @Mutation(() => Dependabot)
  updateDependabot(@Args('updateDependabotInput') updateDependabotInput: UpdateDependabotInput) {
    return this.dependabotService.update(updateDependabotInput.id, updateDependabotInput);
  }

  @Mutation(() => Dependabot)
  removeDependabot(@Args('id', { type: () => Int }) id: number) {
    return this.dependabotService.remove(id);
  }
}
