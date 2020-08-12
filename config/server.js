
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // Cast to int (using parseInt)
  port: env.int('PORT', 1337),
  production: false,
  // proxy: {
  //   enabled: false
  // }, use instead // url: `https://domain.com:1337`,
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});
