import Employee from "../models/employee.model.js";

class EmployeeController {
  async create(req, res) {
    try {
      const { name, surname, patronymic, start_date, employee_type_id } =
        req.body;

      if (
        !name ||
        !surname ||
        !patronymic ||
        !start_date ||
        !employee_type_id
      ) {
        return res
          .status(400)
          .json({ message: "All fields except image are required" });
      }

      const imagePath = req.file ? req.file.path : "";

      const newEmployee = new Employee({
        name,
        surname,
        patronymic,
        start_date,
        employee_type_id,
        image: imagePath,
      });

      await newEmployee.save();

      res.status(201).json({
        message: "Employee created successfully",
        employee: newEmployee,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating employee", error: error.message });
    }
  }
  async get(req, res) {
    try {
      const employees = await Employee.find().populate("employee_type_id");
      res.status(200).json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching employees", error: error.message });
    }
  }
  async id(req, res) {
    try {
      const { id } = req.params;
      const employee = await Employee.findById(id).populate("employee_type_id");

      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json({ employee });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching employee", error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, surname, patronymic, start_date, employee_type_id } =
        req.body;

      const updatedData = {
        name,
        surname,
        patronymic,
        start_date,
        employee_type_id,
      };

      if (req.file) {
        updatedData.image = req.file.path;
      }

      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        updatedData,
        { new: true }
      );

      if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json({
        message: "Employee updated successfully",
        employee: updatedEmployee,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating employee", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedEmployee = await Employee.findByIdAndDelete(id);

      if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting employee", error: error.message });
    }
  }
  async getByEmployeeTypeId(req, res) {
    try {
      const { employee_type_id } = req.params;
      const employees = await Employee.find({ employee_type_id }).populate(
        "employee_type_id"
      );

      if (!employees.length) {
        return res
          .status(404)
          .json({ message: "No employees found for this type" });
      }

      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching employees by type",
        error: error.message,
      });
    }
  }
  async select(req, res) {
    try {
      const employees = await Employee.find().select(
        "name surname patronomic _id"
      );

      res.status(200).json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error retrieving employees", error: error.message });
    }
  }
}

export default new EmployeeController();
