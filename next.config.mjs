const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/story_sage_frontend" : "",
  assetPrefix: isProd ? "/story_sage_frontend/" : "",
  output: "export",  // <=== enables static exports
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;