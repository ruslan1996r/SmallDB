import { Router } from "express"
const router = Router()

import BookingController from "../modules/booking/controller"

router.post("/all", BookingController.getBookings)
router.post("/", BookingController.createBooking)
router.put("/:id", BookingController.updateBooking)
router.delete("/:id", BookingController.deleteBooking)
router.get("/report", BookingController.salesReport)

export default router