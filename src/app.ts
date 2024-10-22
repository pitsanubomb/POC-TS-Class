import express, {Express} from 'express';

const app: Express = express();
const port: Number = 3000;

// Setting
app.use(express.json());

// Start server
app.listen(port, () => {
  console.log(`[server]: Server is running at ${port}`);
});
