# rede-farmaceuticos

Hi! This is a simple project with MVC architecture.

The idea of the platform is to manage drugs in a pharmaceutical network and create connections through platform users.

For this to happen, technologies such as: Javascript, Node.js, Express and Sequelize were implemented in the backend, and in the frontend using the ejs template model, together with the Bootstrap framework.

To make the project run...

Clone this repo on your machine and install the dependencies with `npm install`

Check your database access credentials in the project config

Afterwards, run the migrations to create the database with `npx sequelize db:create` and `npx sequelize db:migrate`

After that, the application will be running on localhost:80, ready to be used!