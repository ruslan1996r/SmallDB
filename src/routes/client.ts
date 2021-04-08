import { Router } from "express"
const router = Router()

import ClientController from "../modules/client/controller"

router.post("/all", ClientController.getClients)
router.post("/", ClientController.createClient)
router.put("/:id", ClientController.updateClient)
router.delete("/:id", ClientController.deleteClient)

export default router