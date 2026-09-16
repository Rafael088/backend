import { Products } from "../models/products.js";

export async function cProducts(req, res) {
    try {

       const data = req.body; //Obtenemos la informacion del Front y la guardamos
        
        let product = new Products(data); //Asignamos el esquema con los datos nuevos

        await product.save(); //guardar en la DB
        console.log("Product: " + product)

        res.status(200).json({
            msg: "product created succesfully",
            ok: true,
            product
        })

    } catch (error) {
        console.error("Error en el get del producto: " + error);

        return res.status(500).json({
            msg: "Error getting products",
            ok: false
        })
    }
}

export async function gProducts(req, res) {
    try {

        const products = await Products.find()

        res.status(200).json({
            msg: "Products getting succesfully",
            ok: true,
            products,
        })

    } catch (error) {
        console.error("Error en el get del producto: " + error);

        return res.status(500).json({
            msg: "Error getting products",
            ok: false
        })
    }
}


export async function dProducts(req, res) {

    const { id } = req.params
    if (!id) {
        return res.status(400).json({
            msg: "Falta el ID",
            ok: false
        })
    }

    await Products.findByIdAndDelete(id)

    res.status(200).json({
        msg: "Producto Eliminado Correctamente",
        ok: true
    })


}

