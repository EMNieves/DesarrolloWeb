import { Request, Response, Application, Router } from "express";

import { productoController } from "../controllers/producto.cotroller";

export class ProductosRoutes {
    public productosController: productoController =  new productoController();

    public routes(app: Application): void {
        app.route("/productos").get(this.productosController.getAllproducto)

        app.route("/productos/:id").get(this.productosController.getOneProducto)

        app.route("/allproducto").post(this.productosController.create) 

        app.route("/producto/:id").put(this.productosController.updateProducto)

        app.route("/productode/:id").delete(this.productosController.deleteProducto)
    }
}