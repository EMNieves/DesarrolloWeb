import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./productos";


export class TipoProductos extends Model {
  public name!: string;

}

export interface TipoProductosI {
    name: string;
}

TipoProductos.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
  },
  {
    tableName: "tipo_productos", 
    sequelize: database,
    timestamps: true
  }
);


TipoProductos.hasMany(Producto)
Producto.belongsTo(TipoProductos)