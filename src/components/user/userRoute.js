import { Router } from "express";
import { protect, restrictTo } from '../auth/authController.js';
import { createUser, deleteMe, deleteUser, getAllUsers, getMe, getUser, updateMe, updateUser } from "./userController.js";

const router = Router();

// Protect all the route after this point (only logged in user can access)
router.use(protect);

router.get('/me', getMe, getUser);

router.patch('/updateme', updateMe);

router.delete('/deleteme', deleteMe);

// Restrict to only admin after this point
router.use(restrictTo('admin'));

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

export default router;