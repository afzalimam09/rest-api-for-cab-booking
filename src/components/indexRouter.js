import { Router } from "express";

import authRoute from './auth/authRoute.js';
import cabRoute from './cab/cabRoute.js';
import userRoute from './user/userRoute.js';
import bookingRoute from './booking/bookingRoute.js';

const router = Router();

router.use('/auth', authRoute);
router.use('/cabs', cabRoute);
router.use('/users', userRoute);
router.use('/bookings', bookingRoute);

export default router;