import User from "../models/User.schema.js";

const getOne = async (id) => {
    const user = User.findById(id);

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

const getAll = async () => {
    return User.find();
};

const create = async (userData) => {
    const newUser = new User(userData);
    const usedEmail = await User.findOne({ email: newUser.email });

    if (usedEmail) {
        throw new Error('Email already in use');
    }

    return newUser.save();
};

const login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        return "Login successful";
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (id, userData) => {
    const user = await User.findByIdAndUpadate(id, userData, { new: true });

    if (!user) {
        throw new Error('User not found');
    }

    return user;
}

const remove = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return `User ${user.email} deleted`;
};

const changeAuthLevel = async (id) => {
    const user = await User.findById(id);

    if (!user) {
        throw new Error('User not found');
    }

    user.authLevel = user.authLevel === 1 ? 2 : 1;
    return user.save();
}

export { getOne, getAll, create, update, remove, changeAuthLevel, login };
