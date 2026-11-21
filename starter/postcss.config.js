// Tailwind 4 is here only to reproduce the host app's environment (its preflight reset is active),
// so the visual tests prove the design layer holds up under it. The design components do not use Tailwind.
module.exports = {
  plugins: { '@tailwindcss/postcss': {} },
};
