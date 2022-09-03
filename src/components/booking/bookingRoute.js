import { Router } from "express";
import { protect, restrictTo } from '../auth/authController.js';
import { arangeCab, bookCab, driverConfirmation, findNearByCab, getBooking, getBookingHistory } from "./bookingController.js";

const router = Router();

// Only logged in user can access these routes
router.use(protect);
router.use(restrictTo('user'));

// Book a cab
router.get('/book-cab/:pickup/:drop',findNearByCab, driverConfirmation, arangeCab, bookCab);

//Get all booking history
router.get('/booking-history', getBookingHistory);

//Get single booking detail
router.get('/:id', getBooking);

export default router;