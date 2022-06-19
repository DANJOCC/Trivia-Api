"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openTrivia = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
class openTriviaQuestions {
    decoder(objecto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(objecto.results[0]);
            const data = objecto.results;
            console.log(data);
            for (const question of data) {
                question.question = decodeURIComponent(question.question);
                question.correct_answer = decodeURIComponent(question.correct_answer);
                question.incorrect_answers[0] = decodeURIComponent(question.incorrect_answers[0]);
                question.incorrect_answers[1] = decodeURIComponent(question.incorrect_answers[1]);
                question.incorrect_answers[2] = decodeURIComponent(question.incorrect_answers[2]);
            }
            return data;
        });
    }
    getData(req, res, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield (0, cross_fetch_1.default)(url);
            let thing = yield response.json();
            openTriviaQuestions.prototype.decoder(thing).then(data => res.status(200).send(data));
        });
    }
    getNormalQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let difficulty = req.query.difficulty;
            openTriviaQuestions.prototype.getData(req, res, `https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=multiple&encode=url3986`);
        });
    }
    getRushQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let difficulty = req.query.difficulty;
            let amount = req.query.amount;
            openTriviaQuestions.prototype.getData(req, res, `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple&encode=url3986`);
        });
    }
}
exports.openTrivia = new openTriviaQuestions;
