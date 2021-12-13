import mongoose from "mongoose";
import endpoint from '../config/config';
import colors from 'colors';

mongoose.Promise = global.Promise;
let mongoDb = endpoint.MONGODB;
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectWithRetry = () => {
  // console.log('MongoDB connection with retry',String)
  mongoose.connect("mongodb://localhost/rcaaq", option).then(() => {
    console.log(colors.green('MongoDB is connected'))
  }).catch(err => {
    console.log(colors.yellow('MongoDB connection unsuccessful, retry after 5 seconds.'))
    setTimeout(connectWithRetry, 5000)
  })
}

// mongoose.connect(String(mongoDb), option)
// mongoose.connection.on("open", function() {
//   console.log("Connection has been established");
// });

// mongoose.connection.on("error", function(error) {
//   console.log(error);

//   console.log("Error in conecting mongo server");
// });
connectWithRetry()

export { mongoose };
