import {Router} from "express";
import { openTrivia } from "../controllers/openTriviaQuestions";
const route: Router = Router();

route.get("/question", openTrivia.getQuestion)

export default route;