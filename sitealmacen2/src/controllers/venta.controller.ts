import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Venta,VentaI } from '../models/ventas';


export class VentaController {


    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll(
               
            ) // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    }
}