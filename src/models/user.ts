import {Schema, model, Model} from "mongoose";
import userObject from "../interfaces/userObject";


const userSchema: Schema= new Schema<userObject>({
    username: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
})

const Users:Model<userObject>= model('Users', userSchema)

export default Users

