import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";


export class ProductoVenta extends Model {
  public ProductoId!: number;
  public VentaId!: number;
  public telefonoCliente!: string;
  public cantidad!: number;
  public valor_unitario!: number;

}

export interface ProductoVentaI {
    ProductoId: number;
    VentaId: number;
    telefonoCliente: string;
    cantidad: number;
    valor_unitario: number;
}

ProductoVenta.init(
  {
   
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
    valor_unitario: {
        type: DataTypes.BIGINT,
        allowNull: true
      }
  },
  {
    tableName: "producto_venta", 
    sequelize: database,
    timestamps: false
  }
);
