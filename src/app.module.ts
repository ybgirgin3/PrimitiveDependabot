import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { GithubRepoModule } from './github-repo/github-repo.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { join } from 'path';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  imports: [
    // ** CRUD Modules
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      // database: ':memory:',
      database: 'db.sqlite3',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    // ** user defined modules
    PersonModule,
    GithubRepoModule,
    ScraperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
