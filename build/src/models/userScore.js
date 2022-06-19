"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userScoreSchema = new mongoose_1.Schema({
    rush: { type: Number, required: true },
    normal: { type: Number, required: true },
    username: { type: String, required: true }
});
const Users = (0, mongoose_1.model)('userScores', userScoreSchema);
exports.default = Users;
