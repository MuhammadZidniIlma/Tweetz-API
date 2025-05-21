import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import postRouter from "./src/Routes/postRoute.js"
import userRouter from "./src/Routes/userRoute.js"
import authRouter from "./src/Routes/authRoute.js"
dotenv.config()
const app = express();

//middlewares
app.use(cors())
app.use(express.json())

app.get( '/', (req, res) => {
    res.send('Hello from Tweetz!')
} );
//routes
app.use('/api/auth', authRouter );
app.use('/api/posts', postRouter );
app.use('/api/users', userRouter );


//connect server and mongodb
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);        
        
    })
})
.catch(error => console.log(error))