const express = require('express');
const Alert = require('../models/Alert');
const router = express.Router();

router.post('/', async (req, res, next) => {

    const { email, keyword, timer } = req.body;

    try {
        if (keyword.length < 2) {
            return res.json({ error: 'Digite uma palavra chave válida' });
        }
        else if (timer == 2 || timer == 10 || timer == 30) {
            Alert.create(req.body);
            res.send({ sucess: "Alerta de item programado com sucesso" });
        }
        else {
            return res.json({ error: 'Temporizador inválido, tente 2, 10 ou 30' });
        }

    } catch (err) {
        return res.status(400).send({ error: 'O registro do alerta falhou.' });
        console.log(err);
    }
});

module.exports = router;
