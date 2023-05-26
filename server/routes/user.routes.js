import { Router } from "express";
import { login } from "../controllers/user.controller.js";

const router = Router();

// // Middleware function to check if the user is an admin
// const adminVerification = (req, res, next) => {
//   // Assuming the user object is available in req.user
//   if (req.user.isAdmin) {
//     // User is an admin, continue to the next middleware/route handler
//     next();
//   } else {
//     // User is not an admin, return an error response
//     res.status(403).json({ message: "Access denied. User is not an admin." });
//   }
// };

router.post("/login", login);
// router.get("/admin", adminVerification, getOne);

export default router;
