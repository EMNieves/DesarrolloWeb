import { Request, Response, Application, Router } from "express";

import { productoController } from "../controllers/producto.cotroller";

export class ProductosRoutes {
    public productosController: productoController =  new productoController();

    public routes(app: Application): void {
        app.route("/productos").get(this.productosController.getAllproducto)
    }
}