import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GithubRepo } from '../github-repo/entities/github-repo.entity';
import { GithubRepoModule } from '../github-repo/github-repo.module';

@Module({
  imports: [TypeOrmModule.forFeature([GithubRepo]), GithubRepoModule],
  providers: [PersonResolver, PersonService],
  exports: [PersonService],
})
export class PersonModule {}
