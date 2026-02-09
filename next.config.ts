import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async rewrites() {
    const backend = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;

    console.log("Using backend:", backend);

    return [
      {
        source: "/api/:path*",
        destination: `${backend}/:path*`, // IMPORTANT
      },
    ];
  },
};

export default nextConfig;