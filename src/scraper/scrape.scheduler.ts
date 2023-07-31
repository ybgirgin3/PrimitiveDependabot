import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ScraperService } from './scraper.service';

@Injectable()
export class ScraperScheduler implements OnModuleInit {
  constructor(private readonly scraperService: ScraperService) {}

  // Run this `sendEmail()` module every 24 hours
  @Cron('0 0 */24 * * *')
  handleCron() {
    this.scraperService.sendEmail();
  }

  // Send email immediately after app started
  onModuleInit() {
    this.scraperService.sendEmail();
  }
}
