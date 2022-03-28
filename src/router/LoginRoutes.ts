import * as express from "express";
import {login} from "../controller/LoginController";
//import {checklogin} from "../controller/LoginController";
import * as loginController from "../controller/LoginController";


//創建路由
var router = express.Router();
//掛載具體路由
router.post('/login', login);
router.get('/api/checklogin', loginController.checklogin);

 //向外導出router對象
module.exports = router;