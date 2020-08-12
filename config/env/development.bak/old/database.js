// module.exports = ({ env }) => ({  
//   bak_connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         client: 'mongo',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 27017),
//         database: env('DATABASE_NAME', 'bbb-condo'),
//         username: env('DATABASE_USERNAME', ''),
//         password: env('DATABASE_PASSWORD', ''),
//       },
//       options: {
//         ssl: false
//       }
//     },
//   },
//   options: {
//     authenticationDatabase: env('AUTHENTICATION_DATABASE',''),
//     ssl: env('DATABASE_SSL'),
//   },
// });