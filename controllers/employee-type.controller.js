import EmployeeType from "../models/employe-type.model.js";

class employeeTypeController {
  async create(req, res) {
    try {
      const newEmpType = new EmployeeType(req.body); // Corrected to use constructor properly
      await newEmpType.save();
      res.status(201).json({
        message: "Employee type created successfully",
        employeeType: newEmpType, // Return the created employee type
      });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error creating employee type", error: e.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedEmpType = await EmployeeType.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!updatedEmpType) {
        return res.status(404).json({ message: "Employee type not found" });
      }

      res.status(200).json({
        message: "Employee type updated successfully",
        employeeType: updatedEmpType,
      });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error updating employee type", error: e.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedEmpType = await EmployeeType.findByIdAndDelete(id);

      if (!deletedEmpType) {
        return res.status(404).json({ message: "Employee type not found" });
      }

      res.status(200).json({
        message: "Employee type deleted successfully",
      });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error deleting employee type", error: e.message });
    }
  }
  async get(req, res) {
    try {
      const employeeTypes = await EmployeeType.find();
      res.status(200).json(employeeTypes);
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error retrieving employee types", error: e.message });
    }
  }
  async id(req, res) {
    try {
      const { id } = req.params;
      const employeeType = await EmployeeType.findById(id);

      if (!employeeType) {
        return res.status(404).json({ message: "Employee type not found" });
      }

      res.status(200).json(employeeType);
    } catch (e) {
      res
        .status(500)
        .json({ message: "Error retrieving employee type", error: e.message });
    }
  }
}

export default new employeeTypeController();
