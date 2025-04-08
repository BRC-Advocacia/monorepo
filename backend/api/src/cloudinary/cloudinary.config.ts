// https://medium.com/codex/how-to-upload-images-to-cloudinary-using-nestjs-9f496460e8d7

import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    cloudinary.config({
      cloud_name: 'dsjayggqz',
      api_key: '795241263838129',
      api_secret: 'S9Y6nHII8bQh71fpVjcSllZMdjg',
    });
    return cloudinary;
  },
};
