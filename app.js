import express from "express";
import greetR from "./routes/greetR.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(greetR)

app.listen(PORT, () =>{
    console.log(`Lisening on port ${PORT}`);
})