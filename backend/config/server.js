module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '8cd6ada04625ae3193614b194a5dfa8b'),
    },
  },
  url: env("URL", "http://localhost:1337"),
});
