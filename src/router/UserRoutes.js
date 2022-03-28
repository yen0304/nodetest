"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var UserController_1 = require("../controller/UserController");
//創建路由
var router = express.Router();
//掛載具體路由
router.post('/users', UserController_1.create);
/*
app.get("/users", async function(req: Request, res: Response) {
    const users = await userRepository.find();
    res.json(users);
});

app.get("/users/:id", async function(req: Request, res: Response) {
    const results = await userRepository.findOne(req.params);
    return res.send(results);
});

app.post("/users", async function(req: Request, res: Response) {
    const user = await userRepository.create(req.body);
    const results = await userRepository.save(user);
    return res.send(results);
});

app.put("/users/:id", async function(req: Request, res: Response) {
    const user = await userRepository.findOne(req.params);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
});

app.delete("/users/:id", async function(req: Request, res: Response) {
    const results = await userRepository.delete(req.params.id);
    return res.send(results);
});
*/
//向外導出router對象
module.exports = router;
