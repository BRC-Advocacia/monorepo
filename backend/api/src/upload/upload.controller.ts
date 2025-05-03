import { FileInterceptor } from '@nestjs/platform-express';
import {
  UseInterceptors,
  UploadedFile,
  Post,
  Controller,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { UploadService } from './upload.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('api/upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new BadRequestException('file is required');
    }

    try {
      const result = await this.cloudinaryService.uploadImage(file);
      console.log(result)
      await this.uploadService.saveImageUrl(result.secure_url);
      return { url: result.secure_url };
    } catch (error) {
      throw new BadRequestException('Error uploading image');
    }
  }
}
