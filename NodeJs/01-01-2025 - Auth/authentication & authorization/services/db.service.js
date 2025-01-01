import chalk from "chalk";
import { connect } from "mongoose";
import { MONGO_LOCAL } from "./env.service.js";

const connectToDb = async () => {
    try {
        await connect(MONGO_LOCAL);
        console.log(chalk.magenta("Connected to the database"));
    } catch (error) {
        console.log(chalk.red("Error connecting to the database: ", error));
    }
};

export default connectToDb;
