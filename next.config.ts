import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://13.124.163.252/:path*",
        has: [{ type: "host", value: "ai\\.tangoinsight\\.kr" }],
      },
    ];
  },
};

export default nextConfig;
