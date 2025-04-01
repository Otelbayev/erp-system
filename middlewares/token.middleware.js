import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token || !token.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Access Denied. No Token Provided!" });
    }

    const extractedToken = token.replace("Bearer ", "").trim();

    const decoded = jwt.verify(extractedToken, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

export default verifyToken;
