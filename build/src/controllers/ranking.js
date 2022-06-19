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
exports.ranking = void 0;
const database_1 = __importDefault(require("../utils/database"));
const userScore_1 = __importDefault(require("../models/userScore"));
(0, database_1.default)();
class Ranking {
    //agregar nuevos puntuajes al ranking global
    updateUserScoreData(Username, data, category) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield userScore_1.default.findOne({ username: Username });
            if (user === null)
                return 'es null';
            else {
                category === 'rush' ? user.rush = data : user.normal = data;
                user.save();
                return 'Usuario actualizado';
            }
        });
    }
    //obtener los mejores 10 del mundo en una categoria
    bestScores(mode) {
        return __awaiter(this, void 0, void 0, function* () {
            let scores = yield userScore_1.default.find().sort(`-${mode}`).limit(10).exec();
            return scores;
        });
    }
    //llamada a updateUserScoreData
    newScore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, data, category } = req.body;
            Ranking.prototype.updateUserScoreData(username, data, category).then(resolve => res.send(resolve));
        });
    }
    //llamada a bestScores
    getBestScores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            Ranking.prototype.bestScores(req.body.mode).then(resolve => res.send(resolve));
        });
    }
}
exports.ranking = new Ranking();
