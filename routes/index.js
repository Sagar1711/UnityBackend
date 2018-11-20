const express = require('express');

const router = express.Router();

router.get('/device', (req, res) => {
    let response = {
        scanNumber: "Sx3456yu",
        CPU: String(Math.ceil(Math.random() * 100)),
        RAM: String(Math.ceil(Math.random() * 100)),
        FreePorts: ["5006", "5010", "5011", "5015", "8000"],
        interfaces: ["ETH-01", "ETH-023", "ETH-098"],
        Fans: String(Math.ceil(Math.random() * 100))
    }    
    res.send(response);
});

router.get('/interface/:id', (req, res) => {
    let response = {
        interfaceNumber: String(req.params.id),
        CPU: String(Math.ceil(Math.random() * 100)),
        RAM: String(Math.ceil(Math.random() * 100)),
        Fans: String(Math.ceil(Math.random() * 100))
    }
    res.send(response);
})

module.exports = router;