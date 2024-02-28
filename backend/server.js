require('dotenv').config();
const express = require('express');
const app = express();
const bycript = require('bcrypt')

const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [{
        username: "yasith",
        title: "Post 1"
    },
    {
        username: "nawodya",
        title: "Post 2"
    },

]

const users = [];

app.get("/posts", (req, res) => {
    res.json(posts);
})

app.get("/login", (req, res) => {
    res.json(users);


})

app.get('/dash', (req, res) => {
    res.json(user);

})

app.post('/dash', (req, res) => {

    const username = req.body.username
    const user = { name: username }


    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken });
})


app.post('/login', async(req, res) => {
    try {
        const salt = await bycript.genSalt()
        const hashpassword = await bycript.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashpassword)

        const user = { name: req.body.name, password: hashpassword }
        users.push(user);
        res.status(201).send()



    } catch {
        res.status(500).send()
    }


})

app.post('/login/home', async(req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send("cannnnot find")
    }

    try {
        if (await bycript.compare(req.body.password, user.password)) {
            res.send("Success")
        } else {
            res.send("Not Allowd")
        }
    } catch {
        res.status(500).send()
    }
})

app.listen(3000);