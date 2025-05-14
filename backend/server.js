const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // <-- esta línea importa tu ruta

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conecta la ruta
app.use('/api/users', userRoutes); // <-- esto hace que "/api/users" funcione

app.get('/', (req, res) => {
    res.send('FinTrack Backend is running');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
