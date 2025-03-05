import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async create(article: Partial<Article>, author: User): Promise<Article> {
    const newArticle = this.articlesRepository.create({ ...article, author });
    return await this.articlesRepository.save(newArticle);
  }

  async findAll(): Promise<Article[]> {
    return await this.articlesRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<Article | undefined> {
    return await this.articlesRepository.findOne({
      where: { id },
      relations: ['author'],
    });
  }

  async update(id: number, article: Partial<Article>): Promise<Article> {
    await this.articlesRepository.update(id, article);
    return await this.articlesRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
