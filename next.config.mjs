import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */


const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: false,
    minimumCacheTTL: 60,
    domains: ['https://imgur.com/', 'https://api.the-coffee-class.com.br', 'the-coffee-class.s3.amazonaws.com', 'http://localhost:3000'],
  },
};

export default withNextIntl(nextConfig);
