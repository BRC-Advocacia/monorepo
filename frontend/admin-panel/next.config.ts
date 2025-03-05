import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        // domains: ['example.com'], // Domínios permitidos para carregar imagens
      },
      async headers() {
        return [
          {
            source: '/api/:path*',
            headers: [
              { key: 'Access-Control-Allow-Origin', value: '*' }, // Permite CORS
            ],
          },
        ];
      },
};

export default nextConfig;
