
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // Cast to int (using parseInt)
  port: env.int('PORT', 1337),
  production: true,
  proxy: {
    enabled: false
  },
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});
