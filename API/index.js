const express = require('express');
const app = express();

const port = process.env.PORT || 8877;

app.route('/dashcommercetest').get((req, res) => {

    const username = req.query.user
    const password = req.query.password

    if (username === 'dashcommerce' && password === 'chooseMe'){
        return res.json({ mensagem: `My full name is Mateus Brandeburski Ramos. I want this job!` });

    } else {
        return res.json({ mensagem: `Wrong credentials.` });
    }
});

app.listen(port, () => {
    console.log('Servidor rodando!');
});
