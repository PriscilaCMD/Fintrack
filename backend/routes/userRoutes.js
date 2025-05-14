const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Priscila', email: 'priscila@example.com' },
        { id: 2, name: 'Usuario Demo', email: 'demo@example.com' }
    ]);
});

module.exports = router;
