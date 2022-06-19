import {Response, Request} from 'express';
import fetch from 'cross-fetch'
class openTriviaQuestions{

    private async decoder(objecto: any):Promise<void>{
        console.log(objecto.results[0])
            const data=objecto.results;
            console.log(data)
              for (const question of data) {
                question.question=decodeURIComponent(question.question)
                question.correct_answer=decodeURIComponent(question.correct_answer)
                question.incorrect_answers[0]=decodeURIComponent(question.incorrect_answers[0])
                question.incorrect_answers[1]=decodeURIComponent(question.incorrect_answers[1])
                question.incorrect_answers[2]=decodeURIComponent(question.incorrect_answers[2])
              }
            return data
    }

    private async getData(req:Request, res:Response,url:string,):Promise<void>{
        let response=await fetch(url)
        let thing=await response.json()
        openTriviaQuestions.prototype.decoder(thing).then(data=>res.status(200).send(data))

        
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