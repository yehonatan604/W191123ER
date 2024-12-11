import chalk from 'chalk';

export const ErrorHandler = (err, req, res, next) => {
    console.error(chalk.red(err));
    res.status(res.statusCode || 500).send(err.message);
}