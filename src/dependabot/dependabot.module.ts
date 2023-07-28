import { Module } from '@nestjs/common';
import { DependabotService } from './dependabot.service';
import { DependabotResolver } from './dependabot.resolver';

@Module({
  providers: [DependabotResolver, DependabotService]
})
export class DependabotModule {}
