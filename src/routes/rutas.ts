import {Router} from "express";
import { openTrivia } from "../controllers/openTriviaQuestions";
import {entry} from "../controllers/bouncer"
import { ranking } from "../controllers/ranking";
const route: Router = Router();


route.post("/login",entry.login)
route.post("/register",entry.register)
route.get("/rush_questions",openTrivia.getRushQuestions)
route.get("/normal_questions",openTrivia.getNormalQuestions)
route.get("/bestScores",ranking.getBestScores)
route.post('/newScore',ranking.newScore)
export default route;