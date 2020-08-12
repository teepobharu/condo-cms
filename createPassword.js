// INSIDE node_modules strapi-plugin-users-permissions

// hashPassword(user = {}) {
//     return new Promise(resolve => {
//       if (!user.password || this.isHashed(user.password)) {
//         resolve(null);
//       } else {
//         bcrypt.hash(`${user.password}`, 10, (err, hash) => {
//           resolve(hash);
//         });
//       }
//     });
//   },

/* ========================
CREATE NEW PASSWORD ON DATABASE TO VALIDATE ON MONGODB SERVER
npm i bcryptjs yargs
node createPassword.js --password "somelongpass"

mongo
use strapi-database
db.strapi_administrator.find()
db.strapi_administrator.update({ username: 'admin123' }, { $set: { password: '$2a$10$x9PNurUbXE/a3dvozrgVne1kliLpAVyp3zAX5nFA6aZZ.jvt6eVTy' } })

db.strapi_administrator.create({})
db.strapi_administrator.update({ _id: ObjectId("5f33e6351fa1cfab4690312b")}, { $set: { username: 'admin123', email: 'test@test.com', password: '$2a$10$x9PNurUbXE/a3dvozrgVne1kliLpAVyp3zAX5nFA6aZZ.jvt6eVTy', blocked : false } })
===========================
*/

const bcrypt = require('bcryptjs');
const argv = require('yargs').argv;

const password = argv.password || 'password';
bcrypt.hash(password, 10, (err, hash) => {
  console.log('Your hashed password:');
  console.log(hash);
});

const depass = argv.de || 'depass';