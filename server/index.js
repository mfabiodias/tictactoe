const express = require("express");
const app = express();
const controller = require('./controller');
require('dotenv').config();

// Inicia o servidor
app.listen(3001, process.env.SERVER_HOST, () => { 
  console.error(`Server listening on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});

// Busca dados dos jogadores
app.get("/api/users", async (req, res) => { 
  const data = await controller.gameData();
  res.send (data);
});

// Reinicia dados dos ogadores
app.get("/api/user/reset", async (req, res) => { 
  const data = await controller.gameReset();
  res.send({ status: !!data ? 'success' : 'error' });
});

// Atualiza dados do jogador
app.put("/api/user/:name", async (req, res) => { 
  const score = await controller.gameUpdate(req.params.name);
  res.send({ status: 'success', score: score });
});