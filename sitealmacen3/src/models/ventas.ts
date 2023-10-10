import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public fechaventa!: Date;
  public subtotal!: number;
  public impuestos!: number;
  public descuento!: number;
  public total!: number;
}

export interface VentaI {
  fechaventa: Date;
  subtotal: number;
  impuestos: number;
  descuento: number;
  total: number;
}

Venta.init(
  {
    fechaventa: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    impuestos: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0  // Asumo que el descuento podría no aplicarse, y por defecto es 0.
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    tableName: "ventas", 
    sequelize: database,
    timestamps: true
  }
);
