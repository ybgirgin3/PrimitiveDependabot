import { Module } from '@nestjs/common';
import { GithubRepoService } from './github-repo.service';
import { GithubRepoResolver } from './github-repo.resolver';
import { GithubRepo } from './entities/github-repo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GithubRepo])],
  providers: [GithubRepoResolver, GithubRepoService],
  exports: [GithubRepoService],
})
export class GithubRepoModule {}
