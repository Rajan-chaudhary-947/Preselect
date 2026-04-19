import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";


dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === "development" ? "http://localhost:5173" : process.env.CLIENT_URL ,
    credentials: true,
  }));

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB();
});
