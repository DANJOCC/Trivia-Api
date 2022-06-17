import {Router} from "express";
import { openTrivia } from "../controllers/openTriviaQuestions";
import {entry} from "../controllers/bouncer"
import { ranking } from "../controllers/ranking";
const route: Router = Router();


route.post("/login",entry.login)
route.post("/register",entry.register)
route.post("/rush_questions",openTrivia.getRushQuestions)
route.post("/normal_questions",openTrivia.getNormalQuestions)
route.post("/bestScores",ranking.getBestScores)
route.post('/newScore',ranking.newScore)
export default route;