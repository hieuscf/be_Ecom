import express from 'express';
import { ulid } from "ulid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator"; // kiểm tra chuỗi
import User from '../model/User.js';
export const signup = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log(req.body);
      // Kiểm tra xem email đã tồn tại chưa
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.json({ success: false, message: "Tài khoản đã tồn tại" });
      }

      // Kiểm tra email hợp lệ
      if (!validator.isEmail(email)) {
        // Đổi từ userEmail sang email
        return res.json({
          success: false,
          message: "Email không hợp lệ",
        });
      }

      // Kiểm tra độ dài mật khẩu
      if (password.length < 8) {
        // Đổi từ userPassword sang password
        return res.json({
          success: false,
          message: "Mật khẩu phải nhiều hơn 8 ký tự",
        });
      }

      // Mã hóa mật khẩu
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //create new id
      const id = ulid();
      console.log(id);

      // Sử dụng `create` (tự động lưu vào cơ sở dữ liệu)
      const user = await User.create({
        Uid: id,
        Username: username,
        Email: email,
        Password: hashedPassword,
      });
      console.log(user.dataValues);
      res.status(201).json({ success: true, message: "Đăng ký thành công" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Lỗi máy chủ" });
    }
}