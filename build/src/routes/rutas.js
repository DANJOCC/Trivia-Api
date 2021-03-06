"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const openTriviaQuestions_1 = require("../controllers/openTriviaQuestions");
const bouncer_1 = require("../controllers/bouncer");
const ranking_1 = require("../controllers/ranking");
const route = (0, express_1.Router)();
route.post("/login", bouncer_1.entry.login);
route.post("/register", bouncer_1.entry.register);
route.get("/rush_questions", openTriviaQuestions_1.openTrivia.getRushQuestions);
route.get("/normal_questions", openTriviaQuestions_1.openTrivia.getNormalQuestions);
route.get("/bestScores", ranking_1.ranking.getBestScores);
route.post('/newScore', ranking_1.ranking.newScore);
exports.default = route;
