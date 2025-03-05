import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RequestWithUser } from '../auth/types';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() article: Partial<Article>,
    @Req() req: RequestWithUser,
  ): Promise<Article> {
    const user = req.user; // O usuário autenticado é anexado à requisição pelo JwtAuthGuard
    return await this.articlesService.create(article, user);
  }
  @Get()
  async findAll(): Promise<Article[]> {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Article | undefined> {
    return await this.articlesService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() article: Partial<Article>,
  ): Promise<Article> {
    return await this.articlesService.update(id, article);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number): Promise<void> {
    return await this.articlesService.remove(id);
  }
}
