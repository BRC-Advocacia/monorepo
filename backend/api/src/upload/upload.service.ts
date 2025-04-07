import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Upload } from './upload.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload)
    private uploadRepository: Repository<Upload>,
  ) {}

  async saveImageUrl(url: string): Promise<Upload> {
    const upload = this.uploadRepository.create({ coverImage: url });
    return await this.uploadRepository.save(upload);
  }
}
