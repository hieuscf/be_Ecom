import sequelize from "../config/MySQL_connect.js";
import User from "./User.js";

//relationship between tables
const setupRelationships = () => {
  // Ví dụ thiết lập mối quan hệ giữa User và một mô hình khác (Giả sử có Post model)
  // User.hasMany(Post); // Một người dùng có thể có nhiều bài viết
  // Post.belongsTo(User); // Bài viết thuộc về một người dùng
  // Thiết lập quan hệ nếu cần
  // Đảm bảo rằng bạn đã import tất cả các mô hình cần thiết và thiết lập quan hệ tại đây.
};

//reload changes to database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Thay đổi thành `force: true` nếu muốn xóa và tạo lại bảng
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();

export { sequelize, User}; // Export các model để sử dụng ở nơi khác