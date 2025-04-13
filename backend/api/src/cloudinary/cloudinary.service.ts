// https://github.com/NestCrafts/nestjs-cloudinary

import { Injectable, Inject } from '@nestjs/common';
import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  constructor(@Inject('CLOUDINARY') private readonly cloudinary) {}

  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'brc-advocacia',
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) reject(error)
        resolve(result);
        },
      );

      toStream(file.buffer).pipe(uploadStream);
    });
  }
}
