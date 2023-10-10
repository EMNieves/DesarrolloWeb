import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { TipoProductosI,TipoProductos } from '../models/TipoProductos';


export class TipoproductosController {


    public async getAllTipoproductos(req: Request, res:Response){
        try {
            const tipoproductos: TipoProductosI[] = await TipoProductos.findAll(
               
            ) // select * from clientes;
            res.status(200).json({tipoproductos})
        } catch (error) {

        }
    }

    public async getOneTipoProducto(req: Request, res: Response) {
        const { id: idParam } = req.params;
    
        try {
            const tipoProducto: TipoProductosI | null = await TipoProductos.findOne({
                where: { 
                    id: idParam,
                }
            });
            
            if (tipoProducto) {
                res.status(200).json(tipoProducto);
            } else {
                res.status(300).json({msg: "El tipo de producto no existe"});
            }
        } catch (error) {
            res.status(500).json({msg: "Error Interno"});
        }
    }
    
    public async createTipoProducto(req: Request, res: Response) {
        try {
            let tipoProducto: TipoProductosI = req.body;
            const dataTipoProducto: TipoProductosI = await TipoProductos.create({ ...tipoProducto });
            res.status(200).json({ dataTipoProducto });
        } catch (error) {
            console.error('Error al crear el tipo de producto:', error);
            res.status(500).json({ message: 'Hubo un problema al crear el tipo de producto.' });
        }
    }
    
    public async updateTipoProducto(req: Request, res: Response) {
        const { id: pk } = req.params;
    
        const {
            name
        } = req.body;
    
        try {
            let body: TipoProductosI = {
                name
            };
    
            const tipoProductoExistente: TipoProductosI | null = await TipoProductos.findByPk(pk);
    
            if (!tipoProductoExistente) {
                return res.status(500).json({ msg: "El tipo de producto no existe" });
            }
                
            await TipoProductos.update(body, {
                where: { id: pk }
            });  // Actualiza tipo de producto donde id=pk
    
        } catch (error) {
            return res.status(500).json({ msg: "Error al actualizar el tipo de producto", error });
        }
    
        const tipoProducto: TipoProductosI | null = await TipoProductos.findByPk(pk);
        if (tipoProducto) return res.status(200).json({ tipoProducto });
    }
    
    public async deleteTipoProducto(req: Request, res: Response) {
        const { id: pk } = req.params;
    
        try {
            const tipoProductoExistente: TipoProductosI | null = await TipoProductos.findByPk(pk);
            if (!tipoProductoExistente) {
                return res.status(500).json({msg: "El tipo de producto no existe"});
            }
    
            await TipoProductos.destroy({
                where: { id: pk }
            });
            
            res.status(200).json({msg: "Tipo de producto eliminado"});
        } catch (error) {
            res.status(500).json({ msg: "Error al eliminar el tipo de producto", error });
        }
    }

}