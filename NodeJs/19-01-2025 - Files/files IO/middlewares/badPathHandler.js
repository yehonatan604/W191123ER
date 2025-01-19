import chalk from 'chalk';

export const badPathHandler = (req, res) => {
    console.error(chalk.red('Path Not found'));
    res.status(404).sendFile('public/404.html', { root: process.cwd() });
}

