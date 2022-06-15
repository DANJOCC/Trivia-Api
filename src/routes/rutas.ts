import {Router} from "express";
import { openTrivia } from "../controllers/openTriviaQuestions";
import {entry} from "../controllers/users"
const route: Router = Router();

route.get("/question", openTrivia.getQuestion)
route.post("/newUser",entry.login)

export default route;