# Proyecto F1 Info
![Build Status](https://img.shields.io/badge/in%20build-not%20finished-red)
F1 Info is a website built with ReactJS, NodeJs and Express. It shows data from the history of F1, you can see all the drivers that have raced in F1, all the constructors, all the circuits, all the seasons and the results of each race.

## Tech

F1 Info uses a number of open source projects to work properly:

- [ReactJs]
- [Create React App]
- [MySQL]
- [Bootsrap]
- [React-Bootsrap]
- [NodeJs]
- [Express]
- [Sequelize]
- [Ergast Developer Api]


## Installation

F1 Info requires [Node.js](https://nodejs.org/) to run.

Clone the repository in your desktop.

Open the Git Bash

```sh
git clone https://github.com/JoseAl05/F1-Info-Project.git
cd F1-Info-Project
```
In your [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) create a database.
Then in the file **db.js** (F1-Info-Project/backend/f1-info) change this line:
```
const sequelize = new Sequelize('name-of-your-database','mysql','your-database-password',{
    host:'localhost',
    dialect: 'mysql'
});
```
Now run:
```sh
sequelize db:migrate
```
in your command line to migrate the models to our database.

Open the file **f1db.sql** in your [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) and run the script.

Then run the server and install dependencies:
```sh
cd backend/f1-info
npm install
nodemon app
(If you don't want to install nodemon dependency)
node app
```
Go back to the main folder to install client dependencies and run the client server:
```sh
cd f1-info
npm install
npm start
```
You must keep the server and client server running to navigate the website.

[ReactJs]: <https://reactjs.org/>
[Create React App]:<https://create-react-app.dev/>
[MySQL]:<https://www.mysql.com/>
[React-Bootsrap]:<https://react-bootstrap.github.io/>
[Bootsrap]:<https://getbootstrap.com/>
[NodeJs]: <http://nodejs.org>
[Express]:<http://expressjs.com/>
[Sequelize]:<https://sequelize.org/v6/>
[Ergast Developer Api]:<http://ergast.com/mrd/>
