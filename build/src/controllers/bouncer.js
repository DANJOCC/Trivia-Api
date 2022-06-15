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
exports.entry = void 0;
const database_1 = __importDefault(require("../utils/database"));
const user_1 = __importDefault(require("../models/user"));
(0, database_1.default)();
class Bouncer {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.default.findOne({ username: req.body.username });
            if (user === null)
                res.status(404).send('No existe usuario');
            else if (user.password === req.body.password) {
                let token = { username: user.username, password: user.password };
                res.status(200).send(token);
            }
            else
                res.status(404).send('Usuario y contrasena no coinciden');
        });
    }
    register(req, res, person) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.default.findOne({ email: req.body.email });
            if (user === null) {
                let newUser = yield new user_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                });
                yield newUser.save();
                res.status(202).send("usuario registrado");
            }
            else if (user.username === req.body.username || user.email === req.body.email) {
                res.status(404).send('Usuario existe, por favor cambie el correo electronico o elija otro nombre de usuario');
            }
        });
    }
}
exports.entry = new Bouncer();
