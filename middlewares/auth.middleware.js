import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

class AuthMiddleware {
  authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
    try {
      const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid token." });
    }
  };

  allowRole = (requiredRoles) => {
    [].includes;
    return (req, res, next) => {
      this.authenticateUser(req, res, () => {
        if (!requiredRoles.includes(req.user.role)) {
          return res.status(403).json({
            message: `Access denied baby!`,
          });
        }
        next();
      });
    };
  };
}

export default new AuthMiddleware();
