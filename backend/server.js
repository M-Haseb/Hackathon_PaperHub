const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// This allows your React frontend to talk to this backend
app.use(cors());

// This makes the 'pastpapers' folder accessible via URL
app.use('/files', express.static(path.join(__dirname, 'pastpapers'), {
    setHeaders: (res, path) => {
        res.setHeader('Content-Disposition', 'attachment');
    }
}));

// Test route to check if server is alive
app.get('/status', (req, res) => {
    res.json({ message: "Backend is running smoothly!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is active at http://localhost:${PORT}`);
});