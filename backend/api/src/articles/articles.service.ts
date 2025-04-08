import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { User } from '../users/user.entity';
import { ConfigService } from '@nestjs/config';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
    private configService: ConfigService,
    private cloudinary: CloudinaryService,
  ) { }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  async create(article: Partial<Article>, author: User): Promise<Article> {
    const newArticle = this.articlesRepository.create({ ...article, author });
    return await this.articlesRepository.save(newArticle);
  }

  async findAll(): Promise<Article[]> {
    const articles = await this.articlesRepository.find({
      relations: ['author'],
    });
    return articles.map((article) => {
      if (article.coverImage && !article.coverImage.startsWith('http')) {
        article.coverImage = `${this.configService.get('API_URL')}${article.coverImage}`;
      }
      return article;
    });
  }

  async findOne(id: number): Promise<Article | undefined> {
    const article = await this.articlesRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (
      article &&
      article.coverImage &&
      !article.coverImage.startsWith('http')
    ) {
      article.coverImage = `${this.configService.get('API_URL')}${article.coverImage}`;
    }
    return article;
  }

  async update(id: number, article: Partial<Article>): Promise<Article> {
    await this.articlesRepository.update(id, article);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
