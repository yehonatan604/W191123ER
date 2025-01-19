
export const checkAuthLevel = (minAuthLevel) => async (req, res, next) => {
    try {
        if (req.user.authLevel < minAuthLevel) {
            throw new Error("Authentication Error: Unauthorized user");
        }
        return next();
    } catch (error) {
        return res.status(403).json({ message: error.message });
    }
}

