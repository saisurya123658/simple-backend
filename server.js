const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Backend is running!"
    });
});

app.get("/about", (req, res) => {
    res.json({
        name: "Sai Surya",
        role: "FlyRank Intern"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});