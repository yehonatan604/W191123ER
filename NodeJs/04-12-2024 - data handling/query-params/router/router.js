import { Router } from "express";
import usersRouter from "./user.routes.js";

const router = Router();

router.get("/", (req, res) => {
    return res.json({ message: "Router is working" });
});

router.use("/users", usersRouter);

export default router;