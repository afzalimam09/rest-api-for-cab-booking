import { Router } from "express";
import { protect, restrictTo } from "../auth/authController.js";
import {
  createCab,
  deleteCab,
  getAllCabs,
  getCab,
  updateCab,
} from "./cabController.js";

const router = Router();

// Restrict to only admin to access these routes

router.use(protect);
router.use(restrictTo('admin'));

router
    .route("/")
    .get(getAllCabs)
    .post(createCab);

router
    .route("/:id")
    .get(getCab)
    .patch(updateCab)
    .delete(deleteCab);

export default router;
