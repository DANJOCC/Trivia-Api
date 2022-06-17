import connection from "../utils/database"
import User from "../models/userScore"
import {Response, Request} from 'express'

connection()

class Ranking{

    //agregar nuevos puntuajes al ranking global

    private async updateUserScoreData(Username:string,data:number, category:string,):Promise<void>{
        let user= await User.findOne({username:Username})

        if(user===null)
            Promise.reject('es null')
        else{
            category==='rush'? user.rush=data: user.normal=data
            user.save()
            Promise.resolve('Usuario actualizado')
        }
    }

    //obtener los mejores 10 del mundo en una categoria

    private async bestScores(mode:string):Promise<Array<any>>{
        let scores= await User.find().sort(`-${mode}`).limit(10).exec()
        return scores
    }

    //llamada a updateUserScoreData

    public async newScore(req:Request, res:Response):Promise<void>{
        const {username, data, category}=req.body
        Ranking.prototype.updateUserScoreData(username,data, category).then(resolve=>res.send('Actualizado'))   
    }

    //llamada a bestScores

    public async getBestScores(req:Request, res:Response):Promise<void>{
        Ranking.prototype.bestScores(req.body.mode).then(resolve=>res.send(resolve))
    }
}

export const ranking=new Ranking();