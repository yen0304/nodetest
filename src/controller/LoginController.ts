import {AppDataSource} from "../data-sourese";
import {User} from "../entity/User";
import * as jwt from "jsonwebtoken"; //https://github.com/auth0/node-jsonwebtoken
import * as bcrypt from "bcryptjs";



const userRepository = AppDataSource.getRepository(User);

export const login = async function(req, res) {
    var userinfo = new User();
    userinfo=req.body;
    try {
        var userdata= await userRepository.findOneBy({name: userinfo.name}); //先依照username找是否有用戶，沒有的話會拋出error
        //提交密碼,數據庫密碼
        if (!bcrypt.compareSync(userinfo.password,userdata.password)) {
            res.status(400).send('密碼錯誤');  
        }
        //生成JWT
        //(存放資訊/私鑰/過期時間)
        let data = {'name':userinfo.name}
        const tokenStr = jwt.sign(data,'Taiwan NO.1 ^_^',{expiresIn: '10h'})
        //set cookie
        res.cookie('token',tokenStr,{maxAge: 600000 , httpOnly: false})
        res.send('登入成功');

    } catch (error) {
        res.status(400).send('找不到用戶名稱');  
    }
};


export const checklogin = async function(req, res) {
    res.send('解析成功');
};