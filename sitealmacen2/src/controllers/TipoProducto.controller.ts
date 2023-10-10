import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { TipoProductos,TipoProductosI } from '../models/TipoProductos';


export class TipoproductosController {


    public async getAllTipoproductos(req: Request, res:Response){
        try {
            const tipoproductos: TipoProductosI[] = await TipoProductos.findAll(
               
            ) // select * from clientes;
            res.status(200).json({tipoproductos})
        } catch (error) {

        }
    }
}