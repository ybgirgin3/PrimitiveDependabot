import { Module } from '@nestjs/common';
import { GithubRepoService } from './github-repo.service';
import { GithubRepoResolver } from './github-repo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GithubRepo } from './entities/github-repo.entity';
import { PersonModule } from '../person/person.module';

@Module({
  imports: [TypeOrmModule.forFeature([GithubRepo]), PersonModule],
  providers: [GithubRepoResolver, GithubRepoService],
})
export class GithubRepoModule {}
