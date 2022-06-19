import express from 'express';
import cors from 'cors';
const app=express();
import route from './routes/rutas'
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route)
app.use(cors())

app.listen(app.get('port'), ()=>{
    console.log(`Server on ${app.get('host')}/${app.get('port')}`)
})