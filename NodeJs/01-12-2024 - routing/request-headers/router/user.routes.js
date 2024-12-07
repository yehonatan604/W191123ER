import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const { name } = req.headers;
    const user = {
        name: name || "John",
        age: 30
    };
    res.json(user);
});

router.post("/:name/:age", (req, res) => {
    const { name, age } = req.params;
    const user = {
        name,
        age
    };
    res.json({ message: "User was created", user });
});


router.put("/:name/:age", (req, res) => {
    const { name, age } = req.params;
    const user = {
        name,
        age
    };
    res.json({ message: "User was updated", user });
});

router.delete("/", (req, res) => {
    const { password } = req.headers;

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    } else if (password !== "1234") {
        return res.status(403).json({ message: "Wrong password" });
    } else {
        res.json({ message: "User was deleted" });
    }
});

export default router;