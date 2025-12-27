import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unified image configuration
    domains: [
      'images.unsplash.com',
      'qvhdhltupyshdswtmupw.supabase.co',
      'vjgxuamvrnmulvdajvid.supabase.co',
      'saree4ever-v2-backend.onrender.com',
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
      {
        protocol: "https",
        hostname: "supabase.co",
      },
      {
        protocol: "https",
        hostname: "*.onrender.com",
      },
    ],
    // Preserve PNG transparency - don't force format conversion
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Disable image optimization cache for development to see logo changes immediately
    minimumCacheTTL: 0,
  },
};

export default nextConfig;
