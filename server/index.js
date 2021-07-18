const express = require("express");
const cors = require('cors');
const app = express();
const controller = require('./controller');
require('dotenv').config();

app.use(cors());

// Inicia o servidor
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => { 
  console.log(`Server listening on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
});

// Busca dados dos jogadores
app.get("/api/users", async (req, res) => { 
  const data = await controller.gameData();
  res.send (data);
});

// Reinicia dados dos ogadores
app.get("/api/user/reset", async (req, res) => { 
  const data = await controller.gameReset();
  res.send (data);
});

// Atualiza dados do jogador
app.put("/api/user/:name", async (req, res) => { 
  const data = await controller.gameUpdate(req.params.name);
  res.send (data);
});