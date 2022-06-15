import {Schema, model, Model} from "mongoose";
import whatever from "../interfaces/whatever";

const userSchema: Schema= new Schema<whatever>({
    username: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
})

const Users:Model<whatever>= model('Users', userSchema)

export default Users

