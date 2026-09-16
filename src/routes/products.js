import { Router } from "express";
import { gProducts, dProducts, cProducts } from "../controller/products.js";


const router = Router();

//metodos de mis productos
router.get("/get-products", gProducts)
router.post("/create-products", cProducts)
router.delete("/delete-products/:id", dProducts)



export default router;