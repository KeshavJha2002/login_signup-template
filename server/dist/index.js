import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
config({
    path: './.env'
});
const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.get('/', (req, res, next) => {
    res.status(200).send("Hello World");
});
app.listen(process.env.PORT || 4000, () => {
    try {
        console.log(`Server is running at ${process.env.PORT || 4000}`);
    }
    catch (e) {
        console.log(e);
    }
});
