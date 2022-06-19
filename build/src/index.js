"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const rutas_1 = __importDefault(require("./routes/rutas"));
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(rutas_1.default);
app.use((0, cors_1.default)());
app.listen(app.get('port'), () => {
    console.log(`Server on ${app.get('host')}/${app.get('port')}`);
});
