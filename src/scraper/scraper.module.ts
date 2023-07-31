import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GithubRepoModule } from 'src/github-repo/github-repo.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([]),
    GithubRepoModule,
  ],
  providers: [ScraperService],
})
export class ScraperModule {}
