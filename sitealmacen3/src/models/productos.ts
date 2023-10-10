import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Venta } from "./ventas";
import { ProductoVenta } from "./ProductoVenta";


export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public precio!: number;
  public stockMin!: number;
  public cantidad!: number;
 
}

export interface ProductoI {
  nombre: string;
  marca: string;
  precio: number;
  stockMin: number;
  cantidad: number;
}

Producto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    stockMin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "productos", 
    sequelize: database,
    timestamps: true
  }
);

Producto.belongsToMany(Venta, {through: ProductoVenta});
Venta.belongsToMany (Producto, {through: ProductoVenta}) 