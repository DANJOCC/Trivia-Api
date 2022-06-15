import mongoose from "mongoose";

const URLcluster:string="mongodb+srv://projecto1:projecto1@trivia.zhwqbyq.mongodb.net/juego?retryWrites=true&w=majority";

const connection=()=>{
    mongoose.connect(URLcluster)
    .then(()=>{
        console.log('Se logro')
    })
    .catch((error)=>{
        console.log('algo paso')
        console.error(error)
        process.exit(1)
    })
}

export default connection