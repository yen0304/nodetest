import { DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "springboot",
    "database": "mytest",
    "entities": ["src/entity/*.js"],
    "logging": true,
    "synchronize": false
})