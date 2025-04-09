// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());


app.get('/v1/pessoas/aberto/estatistico', async (req, res) => {
    try {
        const response = await axios.get('https://abitus-api.geia.vip/v1/pessoas/aberto/estatistico', {
            headers: {
                'User-Agent': 'insomnia/11.0.2'
            }
        });

        res.send(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.get('/v1/pessoas/aberto/filtro', async (req, res) => {
    try {
        const response = await axios.get('https://abitus-api.geia.vip/v1/pessoas/aberto/filtro', {
            headers: {
                'User-Agent': 'insomnia/11.0.2'
            },
            params: req.query
        });

        res.send(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.get('/v1/pessoas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`https://abitus-api.geia.vip/v1/pessoas/${id}`, {
            headers: {
                'User-Agent': 'insomnia/11.0.2'
            },
        });

        res.send(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Proxy rodando em http://localhost:${PORT}`);
});