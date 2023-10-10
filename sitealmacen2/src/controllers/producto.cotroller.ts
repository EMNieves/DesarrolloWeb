import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Producto,ProductoI } from '../models/productos';


export class productoController {


    public async getAllproducto(req: Request, res:Response){
        try {
            const producto: ProductoI[] = await Producto.findAll(
               
            ) // select * from clientes;
            res.status(200).json({producto})
        } catch (error) {

        }
    }
}