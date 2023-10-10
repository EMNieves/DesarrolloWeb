import { Request, Response, Application, Router } from "express";

import { TipoproductosController } from "../controllers/TipoProducto.controller";

export class TipoProductosRoutes {
    public tipoproductosController: TipoproductosController =  new TipoproductosController();

    public routes(app: Application): void {
        app.route("/tipoproductos").get(this.tipoproductosController.getAllTipoproductos)

        app.route("/tipoproductos/:id").get(this.tipoproductosController.getOneTipoProducto)

        app.route("/alltipoproducto").post(this.tipoproductosController.createTipoProducto) 

        app.route("/tipoproducto/:id").put(this.tipoproductosController.updateTipoProducto)

        app.route("/tipoproductode/:id").delete(this.tipoproductosController.deleteTipoProducto)
    }
}