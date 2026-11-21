import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [{ source: "/demfi", destination: "/pay2own", permanent: true }];
  },
};

export default nextConfig;
