import app from './app.js';
import "dotenv/config";

const PORT = process.env.PORT ;

const startServer = async () => {
  try {
    // await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
