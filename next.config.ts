import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during builds (temporary - remove after fixing all lint issues)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Konfigurasi untuk Turbopack
  experimental: {
    turbo: {
      rules: {
        // Support untuk 3D model files di Turbopack
        '*.glb': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.gltf': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.obj': {
          loaders: ['file-loader'],
          as: '*.js',
        },
        '*.fbx': {
          loaders: ['file-loader'],
          as: '*.js',
        },
      },
    },
  },

  // Fallback untuk Webpack (ketika tidak menggunakan --turbopack)
  webpack: (config, { isServer }) => {
    // Add support for 3D model files
    config.module.rules.push({
      test: /\.(glb|gltf|obj|fbx)$/,
      type: 'asset/resource',
    });

    return config;
  },

  /* config options here */
};

export default nextConfig;
