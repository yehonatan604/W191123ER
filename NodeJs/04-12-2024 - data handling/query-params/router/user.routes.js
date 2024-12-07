import { Router } from "express";
import { users } from "../data/users.js";

const router = Router();

router.get("/", (req, res) => {
    const { name } = req.query;
    if (!name) return res.json(users);

    const user = users.find(user => user.name === name);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    } else {
        return res.json(user);
    }
});

router.post("/", (req, res) => {
    const { name, age } = req.query;
    if (!name || !age) {
        return res.status(400).json({ message: "Name and age are required" });
    }
    const user = {
        name,
        age
    };
    users.push(user);
    res.json({ message: "User was created", users });
});


export default router;