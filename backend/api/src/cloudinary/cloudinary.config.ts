// https://medium.com/codex/how-to-upload-images-to-cloudinary-using-nestjs-9f496460e8d7
import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.api_key,
      api_secret: process.env.api_secret,
    });
    return cloudinary;
  },
};
