import { PASSWORD } from "../services/env.service.js";

export const auth = async (req, res, next) => {
    const password = req.headers["x-auth-token"];

    if (password !== PASSWORD) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    next();
};