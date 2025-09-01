import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config()
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use(cors());


app.use((req, res , next) => {
    console.log(req.url ,req.method, new Date().toLocaleString());
    next()
})


app.get('/data', async (req, res) => {
    const respons = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const json = await respons.json();
    res.json(json);
})


app.get('/user', (req, res) => {
    res.json({"user": "welcom to my apliciton"})
})

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});