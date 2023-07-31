// scraper.service.spec.ts
import { Test } from '@nestjs/testing';
import { ScraperService } from './scraper.service';
import { GithubRepoService } from '../github-repo/github-repo.service';
import * as nodemailer from 'nodemailer';

describe('ScraperService', () => {
  let scraperService: ScraperService;
  let gitRepoService: GithubRepoService;

  const nodemailerSendMailMock = jest.fn();

  const nodemailerCreateTransportMock = jest.fn(() => ({
    sendMail: nodemailerSendMailMock,
  }));

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ScraperService,
        GithubRepoService,
        {
          provide: nodemailer,
          useValue: { createTransport: nodemailerCreateTransportMock },
        },
      ],
    }).compile();

    scraperService = moduleRef.get<ScraperService>(ScraperService);
    gitRepoService = moduleRef.get<GithubRepoService>(GithubRepoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('sendEmail', () => {
    it('should send an email', async () => {
      const mailOptions: nodemailer.SendMailOptions = {
        from: 'sender@example.com',
        to: 'receiver@example.com',
        subject: 'About Outdated Packages',
        text: 'Packages outdated :(',
      };

      await scraperService.sendEmail();

      expect(nodemailerCreateTransportMock).toHaveBeenCalledWith({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
      });

      expect(nodemailerSendMailMock).toHaveBeenCalledWith(mailOptions);
    });

    it('should handle email sending error', async () => {
      nodemailerSendMailMock.mockRejectedValue(
        new Error('Email sending failed'),
      );

      await expect(scraperService.sendEmail()).rejects.toThrowError(
        'Email sending failed',
      );
    });
  });

  // Diğer metotların testleri burada yapılabilir
});
