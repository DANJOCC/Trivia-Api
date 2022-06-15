import {Router} from "express";
import { openTrivia } from "../controllers/openTriviaQuestions";
import {entry} from "../controllers/bouncer"
const route: Router = Router();

route.get("/question", openTrivia.getQuestion)
route.post("/login",entry.login)
route.post("/register",entry.register)

export default route;