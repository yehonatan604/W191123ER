import { Router } from "express";
import { users } from "../data/users.js";

const router = Router();

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === +id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    } else {
        return res.json(user);
    }
});

router.post("/", (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ message: "Name and age are required" });
    }

    const id = users.length + 1;
    const user = {
        id,
        name,
        age
    };
    users.push(user);

    res.json({ message: "User was created", user });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = users.find(user => user.id === +id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    } else {
        user.age = age || user.age;
        user.name = name || user.name;
        res.json({ message: "User was updated", user });
    }
});


export default router;
