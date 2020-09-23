const sequelize = require('sequelize')

const db = new sequelize({
	database: "demoDB",
	username: "postgres",
	password: "Linhden89",
	host: "localhost",
	port: 5432,
	dialect: "postgres"
})

db.authenticate()
// .then(() => console.log('ket noi thanh cong'))
.catch(err => console.log(err.message))

const Users = db.define('User', {
	username: sequelize.STRING,
	password: sequelize.STRING
})

/*db.sync()
// .then(() =>console.log('tao table thanh cong'))

/*Users.create({
	username: "user1",
	password: "pass1"
})

Users.bulkCreate(
	[{username: "user2", password: "pass2"},
 	{username: "user3", password: "pass3"},
 	{username: "user4", password: "pass4"},
 	{username: "user5", password: "pass5"},
 	{username: "user6", password: "pass6"},]
).then(() =>console.log('them data thanh cong'))
.catch(err => console.log(err.message))
*/

/*Users.update({
	username: 'user7',
	password: 'password7'
}, {
	where: { id: 7 }
})*/
/*Users.destroy({
	where: {id : 11}
})*/
const user = Users.findAll()
// user = Users.find()
.then(user => console.log(user[1]))
// .then(user => console.log(user.get({plain: true})))
.catch(err => console.log(err.message))

module.exports = Users