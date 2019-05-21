### set node env before running migrations
export NODE_ENV=dev

###Create models and migrations from command line
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

###Running Migrations
node_modules/.bin/sequelize db:migrate

###Undo Migrations
node_modules/.bin/sequelize db:migrate:undo

###You can read more about migrations from : http://docs.sequelizejs.com/manual/tutorial/migrations.html