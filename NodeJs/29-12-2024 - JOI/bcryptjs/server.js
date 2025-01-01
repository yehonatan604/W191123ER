import express from 'express';
import router from './router/router.js';
import chalk from 'chalk';
import { morganLogger } from './middlewares/morganLogger.js';
import { badPathHandler } from './middlewares/badPathHandler.js';
import { ErrorHandler } from './middlewares/errorHandler.js';
import { PORT } from './services/env.service.js';
import connectToDb from './services/db.service.js';
import { createInitialData } from './services/initialData.service.js';

const app = express();

// Add middleware to parse JSON, Maximum request body size is 5MB
app.use(express.json({ limit: '5mb' }));

// add a custom morgan logger middleware
app.use(morganLogger);

// Add the router to the app
app.use(router);

// Add a 404 error handler Middleware
app.use(badPathHandler);

// Add a 500/400 error handler Middleware
app.use(ErrorHandler);

// Start the server
app.listen(PORT, async () => {
    console.log(chalk.blue(`Server is running on port ${PORT}`));
    await connectToDb();
    await createInitialData();
});
