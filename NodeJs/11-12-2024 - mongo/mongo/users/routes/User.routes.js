import { Router } from "express";
import User from "../models/User.schema.js";

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        return res.json({ message: "User created", newUser });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
