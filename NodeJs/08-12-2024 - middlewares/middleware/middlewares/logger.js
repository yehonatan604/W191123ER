import chalk from 'chalk';

export const logger = (req, res, next) => {
    res.on('finish', () => {
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toISOString().split('T')[1].split('.')[0];
        const details = `${res.statusCode} | ${date} ${time} | ${req.method} | ${req.originalUrl}`;

        if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log(chalk.cyan(details));
        } else {
            console.log(chalk.red(details));
        }
    });
    next();
};
