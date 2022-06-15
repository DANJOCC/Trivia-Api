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
    getQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield (0, cross_fetch_1.default)("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=boolean");
            let data = yield response.json();
            res.status(200).send(data);
        });
    }
}
exports.openTrivia = new openTriviaQuestions;
