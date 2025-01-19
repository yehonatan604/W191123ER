
export const isUser = (req, res, next) => {
    if (req.user.authLevel < 3 && req.user._id !== req.params.id) {
        return res.status(403).json(
            { message: "Authentication Error: Unauthorized user" }
        );
    }
    return next();
}

