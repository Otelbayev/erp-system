import User from "../models/user.model.js";
import bcrypt from "bcrypt";

class UserController {
  async createUser(req, res) {
    try {
      const { login, password, role } = req.body;

      const existingUser = await User.findOne({ login });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        login,
        password: hashedPassword,
        role,
      });
      await newUser.save();

      res.status(201).json({
        message: "User created successfully",
        user: { login, role },
      });
    } catch (e) {
      res.status(500).json({ message: "Error creating user", e });
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find({ _id: { $ne: req.user.userId } });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
  async updateUserById(req, res) {
    try {
      const { id } = req.params;

      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
  async updateProfile(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.user.userId, req.body, {
        new: true,
      });
      if (!user) return res.status(404).json({ message: "User not found" });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error!!", error: error.message });
    }
  }
}

export default new UserController();
