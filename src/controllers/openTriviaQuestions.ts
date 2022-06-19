import {Response, Request} from 'express';
import fetch from 'cross-fetch'
class openTriviaQuestions{
    private async getData(req:Request, res:Response,url:string,):Promise<void>{
        let response=await fetch(url)
        let data= await response.json()
        res.status(200).send(data)
    }
    public async getNormalQuestions(req: Request, res:Response): Promise<void>{
        let difficulty=req.query.difficulty
        openTriviaQuestions.prototype.getData(req, res, `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple&encode=url3986`)
    }
    public async getRushQuestions(req: Request, res:Response): Promise<void>{
        let difficulty=req.query.difficulty
        let amount=req.query.amount
        openTriviaQuestions.prototype.getData(req, res, `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple&encode=url3986`)
    }

}

export const openTrivia= new openTriviaQuestions