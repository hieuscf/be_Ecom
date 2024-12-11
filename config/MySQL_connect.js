import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost", // Thay đổi nếu bạn sử dụng host khác
    dialect: "mysql", // Sử dụng MySQL
    logging: false, // Tắt logging (tùy chọn)
  }
);

export default sequelize;
