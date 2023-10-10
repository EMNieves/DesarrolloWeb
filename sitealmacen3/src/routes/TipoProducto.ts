import { Request, Response, Application, Router } from "express";

import { TipoproductosController } from "../controllers/tipoproducto.controller";

export class TipoProductosRoutes {
    public tipoproductosController: TipoproductosController =  new TipoproductosController();

    public routes(app: Application): void {
        app.route("/tipoproductos").get(this.tipoproductosController.getAllTipoproductos)
    }
}