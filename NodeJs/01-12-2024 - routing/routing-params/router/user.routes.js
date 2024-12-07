import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const user = {
        name: "John",
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

router.delete("/:password", (req, res) => {
    const { password } = req.params;
    const secret = "1234";
    if (password === secret) {
        res.json({ message: "User was deleted" });
    } else {
        res.status(403).json({ message: "wrong password!!!" });
    }
});

export default router;