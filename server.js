import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://yyc9920:eBiLUvzl3gjfBgki@cluster0.mi5lb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url);

app.get('/', (req, res) => {
    console.log("TEST!!!");
    res.status(200).send("HELLO WORLD!!!")
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));