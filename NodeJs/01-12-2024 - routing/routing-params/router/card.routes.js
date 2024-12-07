import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    const card = {
        title: "Card title",
        description: "Card description"
    };
    res.json(card);
});

router.post("/:title/:description", (req, res) => {
    const { title, description } = req.params;
    const card = {
        title,
        description
    };
    res.json({ message: "Card was created", card });
});


router.put("title/:newTitle", (req, res) => {
    const { title } = req.params;
    const card = {
        title,
        description: "Card description"
    };
    res.json({ message: "Card was updated", card });
});

router.put("description/:newDescription", (req, res) => {
    const { description } = req.params;
    const card = {
        title: "Card title",
        description
    };
    res.json({ message: "Card was updated", card });
});

router.delete("/:password", (req, res) => {
    const { password } = req.params;
    const secret = "1234";
    if (password === secret) {
        res.json({ message: "Card was deleted" });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
});

export default router;