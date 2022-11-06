const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes";

// Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ status: "all good!" });
});

// Connect to DB using Mongoose
require("./config/mongoose.config")(DB);

// Modularize Routes
require("./routes/jokes.routes")(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
