/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permitir cualquier dominio (usar con precaución)
      },
    ],
  },
};
  
  export default nextConfig;
  