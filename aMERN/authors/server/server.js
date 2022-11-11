const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const DB = "authors";

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ status: "all good!" });
});

// Connect to DB using Mongoose
require("./config/mongoose.config")(DB);

// Modularize Routes
require(`./routes/${DB}.routes`)(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
