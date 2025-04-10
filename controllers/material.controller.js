import Material from "../models/material.model.js";

class MaterialController {
  async create(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error creating", error: error.message });
    }
  }
  async get(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error getting", error: error.message });
    }
  }
  async id(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error getting", error: error.message });
    }
  }
  async update(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error updating", error: error.message });
    }
  }
  async updateStore(req, res) {
    try {
    } catch (error) {
      res.status(500).json({ message: "Error updating", error: error.message });
    }
  }
  async delete(req, res) {
    try {
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleteing", error: error.message });
    }
  }
  async deleteStore(req, res) {
    try {
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleteing", error: error.message });
    }
  }
}

export default new MaterialController();
