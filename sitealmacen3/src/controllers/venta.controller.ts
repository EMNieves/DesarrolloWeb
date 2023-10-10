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

    public async getOneVenta(req: Request, res: Response) {
        const { id: idParam } = req.params;
    
        try {
            const venta: VentaI | null = await Venta.findOne({
                where: { 
                    id: idParam,
                }
            });
            
            if (venta) {
                res.status(200).json(venta);
            } else {
                res.status(300).json({msg: "La venta no existe"});
            }
        } catch (error) {
            res.status(500).json({msg: "Error Interno"});
        }
    }
    
    public async createVenta(req: Request, res: Response) {
        try {
            let venta: VentaI = req.body;
            const dataVenta: VentaI = await Venta.create({ ...venta });
            res.status(200).json({ dataVenta });
        } catch (error) {
            console.error('Error al crear la venta:', error);
            res.status(500).json({ message: 'Hubo un problema al crear la venta.' });
        }
    }
    
    public async updateVenta(req: Request, res: Response) {
        const { id: pk } = req.params;
    
        const {
            fechaventa,
            subtotal,
            impuestos,
            descuento,
            total
        } = req.body;
    
        try {
            let body: VentaI = {
                fechaventa,
                subtotal,
                impuestos,
                descuento,
                total
            };
    
            const ventaExistente: VentaI | null = await Venta.findByPk(pk);
    
            if (!ventaExistente) {
                return res.status(500).json({ msg: "La venta no existe" });
            }
                
            await Venta.update(body, {
                where: { id: pk }
            });  // Actualiza venta donde id=pk
    
        } catch (error) {
            return res.status(500).json({ msg: "Error al actualizar la venta", error });
        }
    
        const venta: VentaI | null = await Venta.findByPk(pk);
        if (venta) return res.status(200).json({ venta });
    }
    
    public async deleteVenta(req: Request, res: Response) {
        const { id: pk } = req.params;
    
        try {
            const ventaExistente: VentaI | null = await Venta.findByPk(pk);
            if (!ventaExistente) {
                return res.status(500).json({msg: "La venta no existe"});
            }
    
            await Venta.destroy({
                where: { id: pk }
            });
            
            res.status(200).json({msg: "Venta eliminada"});
        } catch (error) {
            res.status(500).json({ msg: "Error al eliminar la venta", error });
        }
    }
}