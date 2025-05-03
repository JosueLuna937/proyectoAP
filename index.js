require('dotenv').config();
const express = require('express');
const app = express();
const tareasRoutes = require('./routes/tareasRoutes');

app.use(express.json());

// Middleware para autenticación básica con token
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader !== `Bearer ${process.env.AUTH_TOKEN}`) {
    return res.status(401).json({ error: 'No autorizado' });
  }
  next();
});

// Rutas de tareas
app.use('/tareas', tareasRoutes);

// Ruta de integración con PokéAPI
const { obtenerPokemon } = require('./services/pokemonService');
app.get('/pokemon/:nombre', obtenerPokemon);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
