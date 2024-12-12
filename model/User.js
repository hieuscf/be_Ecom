import sequelize from "../config/MySQL_connect.js";
import { DataTypes, Model } from "sequelize";

// Tạo class User kế thừa từ Model
class User extends Model {}

User.init(
  {
    Uid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Sex: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    Phone: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize, // Đảm bảo rằng bạn đã truyền đúng sequelize instance
    modelName: "User", // Đặt tên mô hình
    tableName: "users", // Tên bảng trong cơ sở dữ liệu
    timestamps: true, // Tự động tạo các trường `createdAt` và `updatedAt`
    underscored: true, // Sử dụng kiểu tên cột `created_at` thay vì `createdAt`
  }
);

/* // Kiểm tra xem mô hình đã được đồng bộ hóa thành công chưa
console.log(User === sequelize.models.User); // true

// Đồng bộ hóa cơ sở dữ liệu
await sequelize.sync({ force: true }); // Xóa và tạo lại bảng
console.log("All models were synchronized successfully. {User}");

// Tùy chọn: nếu bạn chỉ muốn thay đổi bảng `User` mà không xóa bảng, sử dụng `alter: true`
await User.sync({ alter: true }); // Đồng bộ bảng User với mô hình nếu có sự thay đổi

// Nếu muốn xóa bảng, có thể sử dụng dòng dưới đây:
// await User.drop(); */

export default User;
