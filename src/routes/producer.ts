import { Router } from "express"
const router = Router()

import ProducerController from "../modules/producer/controller"

router.post("/all", ProducerController.getProducers)
router.post("/", ProducerController.createProducer)
router.put("/:id", ProducerController.updateProducer)
router.delete("/:id", ProducerController.deleteProducer)

export default router