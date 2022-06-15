import {Response, Request} from 'express';
import fetch from 'cross-fetch'
class openTriviaQuestions{
    public async getQuestion(req: Request, res:Response):Promise<void>{
        let response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean")
        let data= await response.json()
        res.status(200).send(data)
    }
}

export const openTrivia= new openTriviaQuestions