import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";

import formRoutes from "./routes/formRoutes.js";
dotenv.config();

const app = express();

// middleware
app.use(cors({
  origin: "*",     
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


app.options("*", cors());

app.use(express.json());

connectDB();


// routes
app.use("/api/form", formRoutes);



app.get("/", (req, res) => {
  res.send('server running')
});


const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;