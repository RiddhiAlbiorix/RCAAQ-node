import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import colors from 'colors';
import * as dotenv from 'dotenv';
dotenv.config();

import { UserRoutes } from "./routes/user.route";

// const data = require('./middleware/seed');
const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true
}));
const port = 8080;

// Logging the rejected field from multer error
app.use((error: { field: any; }, req: any, res: any, next: any) => {
  console.log('This is the rejected field ->', error.field);
});

// app.use('/uploads', express.static('uploads'));

//ALL ROUTES GOES HERE
app.use("/api", UserRoutes);

app.get('/test', function (req, res) {
  res.json(true);
});

app.listen(port, () => {
  // console.log(`Server started at ${port}`);
  console.log(colors.inverse(`Server started at ${port}`));
});