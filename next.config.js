/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !! To Remove later
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      }
}

module.exports = nextConfig;
