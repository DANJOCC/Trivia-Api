import connection from "../utils/database"
import Users from "../models/user"
import {Response, Request} from 'express'
import UserScore from "../models/userScore"

connection()

class Bouncer{
    public async login(req: Request, res:Response):Promise<void>{
        let user = await Users.findOne({username:req.body.username})
        if(user===null)
            res.status(404).send('No existe usuario')
        else if(user.password===req.body.password){
            let token={username:user.username, password:user.password}
            res.status(200).send(token)
        }
        else
            res.status(404).send('Usuario y contrasena no coinciden')
    }
    public async register(req: Request, res:Response, person:Object):Promise<void>{
        let user = await Users.findOne({email:req.body.email})
        if(user===null){
            let newUser=await new Users({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            let newUserScore=await new UserScore({
                username:req.body.username,
                rush:0,
                normal:0
            })
            await newUser.save()
            await newUserScore.save()
            res.status(202).send("usuario registrado")
        }
        else if(user.username === req.body.username || user.email===req.body.email){
            res.status(404).send('Usuario existe, por favor cambie el correo electronico o elija otro nombre de usuario')
        }

    }
  
}

export const entry=new Bouncer()