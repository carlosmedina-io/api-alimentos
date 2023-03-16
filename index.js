const express = require('express');

const app = express();

const PORT = 3001 || process.env.PORT;

app.get('/health', (req, res) => {
    res.status(200);
    return res.json({
        mensaje: "SERVIDOR ACTIVO",
    });
});

app.get('/receta', (req, res) => {
    res.status(200);
    return res.json({
        mensaje: "RECETA DE ARROZ CON HUEVO",
    });
});

app.listen(PORT, () => {
    console.log(`ESCUCHANDO SERVIDOR EN EL PUERTO ${PORT}`);
});
