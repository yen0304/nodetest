import * as express from "express";
import "reflect-metadata"; //支持＠裝飾性函數
import {AppDataSource} from './data-sourese';



// create typeorm connection
AppDataSource.initialize().then(()=> {}).catch((error) => console.log(error))
    
// create and setup express app
const app = express();
app.use(express.json());

//中間件 

//獲取cookie中間件
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//unless是用正則表達式 .unless({path:[/^\/api\//]}));
var jwt = require('express-jwt');
app.get('/protected',
  jwt({ secret: 'Taiwan NO.1 ^_^', algorithms: ['HS256'],
        getToken: function fromCookie(req) {
            if (req.cookies.token){
                console.log(req.cookies.token);
                return req.cookies.token;
            }
        }
    }),
  function(req, res) {
    res.sendStatus(200);
  });
//app.use(jwt({secret:'Taiwan NO.1 ^_^'}).unless({path:[/^\/api\//]}));

//導入路由模塊
const LoginRouter=require('./router/LoginRoutes');
const UserRouter=require('./router/UserRoutes');
//註冊路由模塊
app.use(LoginRouter,UserRouter);
// start express server
app.listen(3000);