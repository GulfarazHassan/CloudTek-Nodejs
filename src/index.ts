import app from './app';
import connectDB from './config/db';

connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('app is running on port ', PORT);
});
