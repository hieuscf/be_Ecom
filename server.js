import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/MySQL_connect.js";
import * as abc from "./model/index.model.js";

import authRoutes from "./routes/client/authRoutes.js"

//khoi tao env
dotenv.config();

const app = express();
//Cổng kết nối
const port = process.env.PORT;
//

app.use(express.json());
app.use(cors());

//test connect mysql
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//api server
app.use("/api/auth", authRoutes);
// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
