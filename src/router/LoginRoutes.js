"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var LoginController_1 = require("../controller/LoginController");
//import {checklogin} from "../controller/LoginController";
var loginController = require("../controller/LoginController");
//創建路由
var router = express.Router();
//掛載具體路由
router.post('/login', LoginController_1.login);
router.get('/api/checklogin', loginController.checklogin);
//向外導出router對象
module.exports = router;
