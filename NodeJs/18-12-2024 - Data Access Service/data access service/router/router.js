import { Router } from "express";
import usersRouter from "../users/routes/User.routes.js";

const router = Router();

router.get("/", (req, res) => {
    return res.send("Welcome to the API");
});

router.use("/users", usersRouter);

export default router;