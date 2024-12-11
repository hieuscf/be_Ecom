import express from "express";
import cors from "cors";
import dotenv from "dotenv";


//khoi tao env
dotenv.config();

const app = express();
//Cổng kết nối
const port = process.env.PORT;
//

app.use(express.json());
app.use(cors());


// Khởi chạy server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
