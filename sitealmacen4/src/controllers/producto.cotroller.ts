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

    public async getOneProducto(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const producto:ProductoI | null = await Producto.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (producto){
                res.status(200).json(producto)
            } else return  res.status(300).json({msg: "El producto no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    

    public async create(req: Request, res: Response): Promise<void> {
        try {
            let producto: ProductoI = req.body;
            const dataProducto: ProductoI = await Producto.create({ ...producto });
            res.status(200).json({ dataProducto });
        } catch (error) {
            console.error('Error al crear el producto:', error);
            res.status(500).json({ message: 'Hubo un problema al crear el producto.' });
         }
    }

    public async updateProducto(req: Request, res: Response) {
        const { id: pk } = req.params;
    
        const {
            nombre,
            marca,
            precio,
            stockMin,
            cantidad
        } = req.body;
    
        try {
            let body: ProductoI = {
                nombre,
                marca,
                precio,
                stockMin,
                cantidad
            };
    
            const productoExistente: ProductoI | null = await Producto.findByPk(pk);
    
            if (!productoExistente) return res.status(500).json({ msg: "El Producto no existe" });
            
            await Producto.update(body, {
                where: { id: pk }
            });  // Actualiza producto donde id=pk
    
        } catch (error) {
            return res.status(500).json({ msg: "Error al actualizar el producto", error });
        }
    
        const producto: ProductoI | null = await Producto.findByPk(pk);
        if (producto) return res.status(200).json({ producto });
    }

    public async deleteProducto(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const productoExist: ProductoI | null = await Producto.findByPk(pk);
            if(!productoExist) return res.status(500).json({msg:"El producto No existe"})
            await Producto.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"producto Eliminado"})
        } catch (error) {

        }

    } 



}
        
    

