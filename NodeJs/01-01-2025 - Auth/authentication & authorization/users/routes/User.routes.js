import { Router } from "express";
import { create, getOne, getAll, remove, update, changeAuthLevel, login } from "../services/UsersDataAccess.service.js";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validation.js";
import { createUserSchema } from "../validations/createUser.schema.js";
import { loginUserSchema } from "../validations/loginUser.schema.js";
import { checkAuthLevel } from "../../middlewares/checkAuthLevel.js";
import { isUser } from "../../middlewares/isUser.js";

const router = Router();

router.get("/:id", auth, isUser, async (req, res) => {
    try {
        const user = await getOne(req.params.id);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/", auth, checkAuthLevel(3), async (req, res) => {
    try {
        const users = await getAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/", auth, validate(createUserSchema), async (req, res) => {
    try {
        const newUser = await create(req.body);
        return res.json({ message: "User created", newUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/login", validate(loginUserSchema), async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginMessage = await login(email, password);
        return res.json({ message: loginMessage });
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

router.delete("/:id", auth, isUser, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = remove(id);

        return res.json({ message: deletedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.patch("/:id/change-auth", auth, isUser, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await changeAuthLevel(id);

        return res.json({ message: "Auth Level updated", updatedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

export default router;
