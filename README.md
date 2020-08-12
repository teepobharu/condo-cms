# Strapi application


# Migration notes from 3.0.0-beta to stable 3.0.0
- Migrated on 12/08/2020
- Notes : https://strapi.io/documentation/v3.x/migration-guide/migration-guide-beta.20-to-3.0.0.html
- [X] Replace Dependencies version
    - [X] Use new dependencies from mongoose-hook to mongoose-connector
- [X] Migrate (middleware/db/server) configuration json file to js file 
- [X] Remove cb inside function/bootstrap.js
= [X] Add `defaultConnection: 'default',` inside `database.js` to select the connection options

# Admin From mongo
- https://hashinteractive.com/blog/strapi-change-admin-password-in-mongo-database/