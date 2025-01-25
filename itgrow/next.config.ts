import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's strict mode
  webpack: (config, { isServer }) => {
    // Add jQuery as a global variable
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Fix for using jQuery in non-server environments
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Disable 'fs' module for client-side
      };
    }

    return config;
  },
};

export default nextConfig;
