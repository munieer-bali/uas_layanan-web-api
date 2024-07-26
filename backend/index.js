import express from "express";
import cors from "cors";
import AkunRotes  from "./routes/AkunRoute.js"

const app =  express();
app.use(cors());
app.use(express.json());
app.use(AkunRotes);


//express middleware 
const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}' at ${new Date()}`);
    next();
};

//
const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ msg: "Forbidden: No Authorization Header" });
    }
    next();
};





app.listen(5000, ()=> console.log('server app and running....'));