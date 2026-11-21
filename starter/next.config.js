const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {(phase: string) => import('next').NextConfig} */
module.exports = phase => ({
  reactStrictMode: true,
  poweredByHeader: false,
  // The dev server gets its own build folder, so `next dev` (live preview) and `next build` + `next start`
  // (what the visual tests measure) can run at the same time without overwriting each other.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});
