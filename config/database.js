module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // client: 'mongo',
        uri: env('DATABASE_URL', 'mongodb://condoadmin:sgBXvxNSpSJYEeUR@cluster0-shard-00-00-zrtly.mongodb.net:27017,cluster0-shard-00-01-zrtly.mongodb.net:27017,cluster0-shard-00-02-zrtly.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'),
        // host: env('DATABASE_HOST', 'localhost'),
        // port: env.int('DATABASE_PORT', 27017),
        // database: env('DATABASE_NAME', 'strapi'),
        // username: env('DATABASE_USERNAME', 'strapi'),
        // password: env('DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE'),
        ssl: env('DATABASE_SSL',true),
      }
    },
  },
});