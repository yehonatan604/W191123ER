
import express from 'express';
import router from './router/router.js';

const app = express();

// Add the router to the app
app.use(router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

