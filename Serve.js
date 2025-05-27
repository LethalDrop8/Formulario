const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal que devuelve tu nombre en JSON
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola, mi nombre es....' });
});

// Inicializa el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
