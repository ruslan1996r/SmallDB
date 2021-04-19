import { Router } from "express"
const router = Router()

import ProductController from "../modules/product/controller"

router.post("/all", ProductController.getProducts)
router.post("/", ProductController.createProduct)
router.put("/:id", ProductController.updateProduct)
router.delete("/:id", ProductController.deleteProduct)
router.get("/report", ProductController.productReport)

export default router