import chalk from 'chalk';

export const loggerSimple = (req, res, next) => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toISOString().split('T')[1].split('.')[0];
    const details = `${date} ${time} | ${req.method} | ${req.url}`;

    console.log(chalk.cyan(details));
    next();
};
