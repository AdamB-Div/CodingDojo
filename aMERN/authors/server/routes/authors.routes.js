const Author = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors", Author.findAll);
    app.get("/api/authors/:id", Author.findOne);
    app.post("/api/authors", Author.createOne);
    app.put("/api/authors/:id", Author.update);
    app.delete("/api/authors/:id", Author.delete);
};
