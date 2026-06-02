/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
        domains: ['admin.aqarhub360.com'],
      
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
        formats: ['image/avif', 'image/webp'],
        
    },
};


export default nextConfig;
