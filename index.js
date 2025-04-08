import express, { json } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";

config();

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Database connection
connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('\x1b[36m%s\x1b[0m', 'Database Connected to MongoDB.');
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use("/", routes);

// Start server
app.listen(PORT, () => {
  console.log('\x1b[35m%s\x1b[0m', `Serving on port ${PORT}`)
});