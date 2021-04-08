import { Router } from "express"
const router = Router()

import ProductRateController from "../modules/product_rate/controller"

router.post("/all", ProductRateController.getProductsRate)
router.post("/", ProductRateController.createProductRate)
router.put("/:id", ProductRateController.updateProductRate)
router.delete("/:id", ProductRateController.deleteProductRate)

export default router