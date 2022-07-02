const express = require('express')

const app = express()

app.listen('3000')



app.route('/sobre').get( (req,res) => res.send("My full name is Mateus Brandeburski. I want this job!") )

app.route('/').post((req, res) => console.log(req.body))