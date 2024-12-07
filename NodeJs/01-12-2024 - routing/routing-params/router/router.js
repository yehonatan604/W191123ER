import { Router } from "express";
import userRoutes from "./user.routes.js";
import cardRoutes from "./card.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Router is working");
});

router.use("/user", userRoutes);
router.use("/card", cardRoutes);

export default router;