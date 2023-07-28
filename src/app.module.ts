import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DependabotModule } from './dependabot/dependabot.module';

@Module({
  imports: [DependabotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
