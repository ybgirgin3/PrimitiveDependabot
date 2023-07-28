import { Injectable } from '@nestjs/common';
import { CreateDependabotInput } from './dto/create-dependabot.input';
import { UpdateDependabotInput } from './dto/update-dependabot.input';

@Injectable()
export class DependabotService {
  create(createDependabotInput: CreateDependabotInput) {
    return 'This action adds a new dependabot';
  }

  findAll() {
    return `This action returns all dependabot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dependabot`;
  }

  update(id: number, updateDependabotInput: UpdateDependabotInput) {
    return `This action updates a #${id} dependabot`;
  }

  remove(id: number) {
    return `This action removes a #${id} dependabot`;
  }
}
