const express = require('express')

const app = express()

app.listen('3000')

app.route('/exercicio').get((req, res) => {

    const username = req.query.user
    const password = req.query.password

    if (username === 'nome' && password === '123'){
        return res.json({ mensagem: `Meu nome completo é ${username}.` })

    } else {
        return res.json({ mensagem: `Credenciais inválidas.` })
    }
})

