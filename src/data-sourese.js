"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "springboot",
    "database": "mytest",
    "entities": ["src/entity/*.js"],
    "logging": true,
    "synchronize": false
});
