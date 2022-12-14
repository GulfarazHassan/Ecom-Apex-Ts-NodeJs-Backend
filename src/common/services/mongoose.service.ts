import mongoose from 'mongoose';
import debug from 'debug';

const log: debug.IDebugger = debug('app:mongoose-service');

class MongooseService {
  private count = 0;
  private mongooseOptions = {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
  };

  constructor() {
    this.connectWithRetry();
    // mongoose.connect('mongodb://localhost:27017/ecom-apex-bakend');
    // mongodb+srv://hassan:hassan123@cluster0.cnj46.mongodb.net/ecom-apex-bakend?retryWrites=true&w=majority
  }

  getMongoose() {
    return mongoose;
  }

  connectWithRetry = () => {
    log('Attempting MongoDB connection (will retry if needed)');
    mongoose
      .connect(
        'mongodb+srv://hassan:hassan123@cluster0.cnj46.mongodb.net/ecom-apex-bakend?retryWrites=true&w=majority',
        this.mongooseOptions
      )
      .then(() => {
        console.log('MongoDB is connected');
      })
      .catch((err) => {
        const retrySeconds = 5;
        log(
          `MongoDB connection unsuccessful (will retry #${++this
            .count} after ${retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
      });
  };
}
export default new MongooseService();
