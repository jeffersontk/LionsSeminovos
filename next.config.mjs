/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lionsseminovos.com.br',
      }]
  }
};

export default nextConfig;
