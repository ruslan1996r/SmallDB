import { Router } from "express"
const router = Router()

import CategoryController from "../modules/category/controller"

router.post("/all", CategoryController.getCategory)
router.post("/", CategoryController.createCategory)
router.put("/:id", CategoryController.updateCategory)
router.delete("/:id", CategoryController.deleteCategory)

export default router