import express, { type Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();


console.log('NODE_ENV',process.env.NODE_ENV)

app.get('/', (req, res:Response) => {
    return res.status(200).json({
        success:true,
        response:"hello world 💘🫂"
    });
});

//for local env
if(process.env.NODE_ENV !== 'production'){
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}


//for vercel deploy
export default app;