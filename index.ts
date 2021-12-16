import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import colors from 'colors';
import * as dotenv from 'dotenv';
dotenv.config();

import { UserRoutes } from "./routes/user.route";
import { TeamMeetingRoutes } from "./routes/teamMeeting.route";
import { ManagementRoutes } from "./routes/management.route";
import { LivingEnvironmentRoutes } from "./routes/livingEnvironment.route";

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

//ALL ROUTES GOES HERE
app.use("/api", UserRoutes);
app.use("/api", TeamMeetingRoutes);
app.use("/api", ManagementRoutes);
app.use("/api", LivingEnvironmentRoutes);

app.get('/test', function (req, res) {
  res.json(true);
});

app.listen(port, () => {
  console.log(colors.inverse(`Server started at ${port}`));
});
