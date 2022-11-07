const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products", ProductsController.findAllProducts);
    app.get("/api/products/:id", ProductsController.findOneProduct);
    app.post("/api/products", ProductsController.createNewProduct);
    app.put("/api/products/:id", ProductsController.updateProduct);
    app.delete("/api/products/:id", ProductsController.deleteThing);
};
