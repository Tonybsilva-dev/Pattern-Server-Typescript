import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express ();
const port = process.env.PORT || 3335
app.use(routes);
app.use(express.json());



app.listen ({port}, () => {
  console.log(`🚀 Server started on port ${port}!`)
})
