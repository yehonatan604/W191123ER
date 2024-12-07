import express from 'express';
import router from './router/router.js';

const app = express();
const PORT = 8080;

// Add the router to the app
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
