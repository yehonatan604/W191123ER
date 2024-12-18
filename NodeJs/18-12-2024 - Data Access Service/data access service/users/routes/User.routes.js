import { Router } from "express";
import { create, getOne, getAll, remove, update, changeAuthLevel } from "../services/UsersDataAccess.service.js";
import { PASSWORD } from "../../services/env.service.js";
import { auth } from "../../middlewares/auth.js";

const router = Router();

router.get("/:id", auth, async (req, res) => {
    try {
        const user = await getOne(req.params.id);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const users = await getAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const newUser = await create(req.body);
        return res.json({ message: "User created", newUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req.body;
        const updatedUser = await update(id, user);

        return res.json({ message: "User updated", updatedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = remove(id);

        return res.json({ message: deletedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.patch("/:id/change-auth", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await changeAuthLevel(id);

        return res.json({ message: "Auth Level updated", updatedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;
