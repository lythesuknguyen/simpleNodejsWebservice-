const express = require('express')
const app = express()

const Users = require('./db.js')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => res.send('welcome to express'))

app.post('/add', (req,res) => {
	const user = req.body.userName
	const pass = req.body.passWord
	Users.create({
		username: user,
		password: pass
	}).then(()=> res.json({'kq':1}))
	.catch(err => res.json({'kq': 0}))
})

app.post('/read', (req,res) => {
	Users.findAll()
	.then(users=>res.json({'kq':1, 'Users': users}))
	.catch(err => res.json({'kq':0}))
})

app.post('/update', (req,res) => {
	const { id, userName, passWord} = req.body
	Users.update({
		username: userName,
		password: passWord
	}, {
		where: {id: id}
	})
	.then(row=>res.json({'kq':1, 'row': row[0]}))
	.catch(err => res.json({'kq':0}))
})

app.post('/delete', (req,res) => {
const  { id }  = req.body
	Users.destroy({
		where: {id: id}
	})
	.then(row=>res.json({'kq':1, 'row': row}))
	.catch(err => res.json({'kq':0}))
})


app.listen(3000, ()=>console.log('server da khoi dong tren port 3000'))

