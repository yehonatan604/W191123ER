
import chalk from 'chalk';
import morgan from 'morgan';

export const morganLogger = morgan((tokens, req, res) => {
    const color = res.statusCode >= 400 ? chalk.red : chalk.green;

    return [
        chalk.cyan(new Date().toISOString().split('T')[0]),
        chalk.cyan(new Date().toISOString().split('T')[1].split('.')[0]),
        color(tokens.method(req, res)),
        color(tokens.url(req, res)),
        color(tokens.status(req, res)),
        tokens['response-time'](req, res) + 'ms',
    ].join(' | ');
});

