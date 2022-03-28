import {AppDataSource} from "../data-sourese";
import {User} from "../entity/User";

import * as bcrypt from "bcryptjs";

const userRepository = AppDataSource.getRepository(User);


export const create = async function(req, res) {
    var userinfo = new User();
    userinfo=req.body;
    //判斷數據是否合法
    if (!userinfo.name || !userinfo.password) {
        return res.status(400).send("帳號或密碼不能為空");
        
    }
    //如果合法，判斷帳號是否重複
    var result = await userRepository.find({ where: { name: userinfo.name} });
    if (result.length>0) {
        return res.status(400).send("帳號名稱重複");
        
    }
    //呼叫bcrypt加密(明文密碼,隨機鹽值長度)
    userinfo.password=bcrypt.hashSync(userinfo.password,10)
    return res.status(200).send(await userRepository.save(userinfo));

};

