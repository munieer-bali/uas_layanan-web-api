import express from "express";
import jwt from 'jsonwebtoken';

import { 
    getAkuns, 
    getAkunsById,
    createAkuns,
    updateAkuns,
    deleteAkuns

} from "../controllers/AkunController.js";

const app = express();
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}' at ${new Date()}`);
    next();
};

// Middleware Authentication
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ msg: "Forbidden: No Authorization Header" });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, '30e7b6ed514daa50bba89d9dae3864c798c31854a822b78de0cb2e9152ce624f', (err, user) => {
        if (err) {
            return res.status(403).json({ msg: "Forbidden: Invalid Token" });
        }

        req.user = user;
        next();
    });
};

app.use(loggingMiddleware);

app.use(authMiddleware);

const router = express.Router();

router.get('/akuns',loggingMiddleware, getAkuns);
router.get('/akuns/:id',loggingMiddleware, getAkunsById);

// middleware di akun tertentu
// router.post('/akuns', authMiddleware, createAkuns);
// router.patch('/akuns/:id',authMiddleware, updateAkuns);
// router.delete('/akuns/:id',authMiddleware, deleteAkuns);

router.post('/akuns',  createAkuns);
router.patch('/akuns/:id', updateAkuns);
router.delete('/akuns/:id', deleteAkuns);

export default router;