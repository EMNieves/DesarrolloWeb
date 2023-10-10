import { Request, Response, Application, Router } from "express";

import { VentaController } from "../controllers/venta.controller";

export class VentaRoutes {
    public ventaController: VentaController =  new VentaController();

    public routes(app: Application): void {
        app.route("/ventas").get(this.ventaController.getAllVenta)

        
        app.route("/tipoproductos/:id").get(this.ventaController.getOneVenta)

        app.route("/alltipoproducto").post(this.ventaController.createVenta) 

        app.route("/tipoproducto/:id").put(this.ventaController.updateVenta)

        app.route("/tipoproductode/:id").delete(this.ventaController.deleteVenta)
    }
}
