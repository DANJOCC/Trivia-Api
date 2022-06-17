import {Schema, model, Model} from "mongoose";
import userObject from "../interfaces/userObject";


const userScoreSchema: Schema= new Schema<userObject>({
    rush: {type: Number, required:true},
    normal: {type: Number, required:true},
    username: {type: String, required:true}
})
 
const Users:Model<userObject>= model('userScores', userScoreSchema)

export default Users
