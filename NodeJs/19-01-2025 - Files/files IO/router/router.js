import { Router } from "express";
import usersRouter from "../users/routes/User.routes.js";
import { auth } from "../middlewares/auth.js";
import { checkAuthLevel } from "../middlewares/checkAuthLevel.js";
import path from "path";
import fs from "fs";
import UserSchema from "../users/models/User.schema.js";

const router = Router();

router.get("/log/:date", auth, checkAuthLevel(3), (req, res) => {
    try {
        const { date } = req.params;
        return res.sendFile(path.join(process.cwd(), 'logs', `${date}.txt`));
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/test", auth, async (req, res) => {
    fs.mkdir(path.join(process.cwd(), 'test'), { recursive: true }, async (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        } else {
            const user = await UserSchema.findById(req.user._id);
            fs.writeFile(path.join(process.cwd()) + '/test/test.txt', `Hello ${user.username}`, { flag: 'w' }, (err) => {
                if (err) {
                    return res.status(500).json({ message: err.message });
                } else {
                    return res.json({ message: 'File created' });
                }
            });
        }
    });
});

router.use("/users", usersRouter);

export default router;