import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (true) {
      return config;
    }

    return {
      ...config,
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    };
  },

  // eslint: {
  //   dirs: ['pages', 'utils','app'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  // },

  /* config options here */
};

export default nextConfig;
