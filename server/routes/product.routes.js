import { Router } from "express";
import {
  getAll,
  getOne,
  getByCategory,
  create,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getAll);
router.get("/products/:id", getOne);
router.get("/products/filter/:category", getByCategory);
router.post("/products", create);

// module.exports = (app) => {
//   app.get("/api/products", ProductController.getAll);
//   app.get("/api/products/:id", ProductController.getOne);
//   app.post("/api/products", ProductController.create);
//   app.patch("/api/products/:id", ProductController.update);
//   app.delete("/api/products/:id", ProductController.delete);
// };

export default router;
