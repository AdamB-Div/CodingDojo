const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

// User Class
class User {
    constructor() {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.datatype.number({ max: 1000 });
    }
}

// Company Class
class Company {
    constructor() {
        this._id = faker.datatype.number({ max: 1000 });
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

// Routes
app.get("/api", (req, res) => {
    res.json({ message: "Try /api/user/new OR /api/company/new" });
});

app.get("/api/user/new", (req, res) => {
    res.json(new User());
});

app.get("/api/company/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    const user = new User();
    const company = new Company();
    const output = {
        user,
        company,
    };
    res.json(output);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
