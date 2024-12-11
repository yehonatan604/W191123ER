import User from "../users/models/User.schema.js";
import initialUsers from "../users/data/initialUsers.json" assert { type: "json" };

export const createInitialData = async () => {
    const usersFromDb = await User.find();

    initialUsers.forEach(async (user) => {
        try {
            if (usersFromDb.find((u) => u.email === user.email)) {
                return;
            }

            const newUser = new User(user);
            await newUser.save();
            console.log("User created: ", newUser.email);
        } catch (error) {
            console.log("Error creating user: ", error);
        }
    });
}