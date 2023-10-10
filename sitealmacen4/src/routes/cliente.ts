import { Request, Response, Application, Router } from "express";

import { ClienteController } from '../controllers/cliente.controller';

export class ClienteRoutes {
    public clienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        app.route("/clientes").get(this.clienteController.getAllCliente)
        
        app.route("/clientes/:id").get(this.clienteController.getOneCliente)

        app.route("/allcliente").put(this.clienteController.create) 

        app.route("/cliente/:id").put(this.clienteController.updateCliente)

        app.route("/clientede/:id").delete(this.clienteController.deleteCliente)
    }
}

