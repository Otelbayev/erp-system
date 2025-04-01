import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class AuthController {
  async login(req, res, next) {
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ login });
      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Password is incorrect" });
      }

      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      next(error);
    }
  }

  async createDefaltAdmin() {
    try {
      const existingAdmin = await User.findOne({ role: "superadmin" });
      if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash("123", 10);

        await User.create({
          login: "123",
          password: hashedPassword,
          role: "superadmin",
        });

        console.log("✅ Default admin user created.");
      } else {
        console.log("✅ Admin user already exists.");
      }
    } catch (e) {
      console.error("❌ Error creating default admin:", e);
    }
  }

  async checkToken(req, res) {
    const user = await User.findById({ _id: req.user.userId });
    res.json({ message: "Access Granted", user: user });
  }
}

export default new AuthController();
