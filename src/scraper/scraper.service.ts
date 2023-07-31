import { Injectable } from '@nestjs/common';
import { GithubRepoService } from '../github-repo/github-repo.service';
import * as nodemailer from 'nodemailer';
import { GithubRepo } from '../github-repo/entities/github-repo.entity';
import { scrape } from './helpers/scraper';

import { PackageJson } from './interfaces/package.interface';

@Injectable()
export class ScraperService {
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly gitRepoService: GithubRepoService) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      secure: false, // NOTE: for dev purpose only
    });
  }

  async sendEmail(): Promise<void> {
    const _handled = this.handleScrape();

    const mailBody = `
    Hello!, I hope you're OK, 
    Here is the outdated packages according to your subscribed repos

    ${_handled}
    `;

    try {
      const mailOptions: nodemailer.SendMailOptions = {
        from: 'sender@example.com',
        to: 'receiver@example.com',
        subject: 'About Outdated Packages',
        text: mailBody,
      };
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error while sending email', error);
    }
  }

  async handleScrape() {
    const dataFromDb = this.findAll();
    const _getRepos: GithubRepo[] = dataFromDb['data']['getRepos'];
    const outDatedList = [];

    for (const repo of _getRepos) {
      outDatedList.push(scrape(repo.owner, repo.repoName, repo.fileName));
    }

    return outDatedList;
  }

  async findAll(): Promise<GithubRepo[]> {
    // return `This action returns all scraper`;
    const data = await this.gitRepoService.findAll(); // get data from graphql db
    return data;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} scraper`;
    return await this.gitRepoService.findOne(id);
  }
}
