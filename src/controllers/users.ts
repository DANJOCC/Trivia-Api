import connection from "../utils/database"
import Users from "../models/user"
import {Response, Request} from 'express'

connection()

class Bouncer{
    public async login(req: Request, res:Response, person:Object):Promise<void>{
        console.log(req.body.username)
        let user = await Users.findOne({username:req.body.username})
        let user1 = await new Users({
        username:"prueba2",
        email:"prueba2@gmail.com",
        password:"prueba2"
        })
        await user1.save()
        if(user==null)
            res.status(404).send('No se encontro ninguno')
        else{
            let token={username:user.username, password:user.password}
            res.status(200).send(token)
        }
            
    }
}

export const entry=new Bouncer()