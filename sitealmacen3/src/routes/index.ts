import { ClienteRoutes } from './cliente';
import { ProductosRoutes } from './producto';
import { TipoProductosRoutes } from './tipoproducto';
import { VentaRoutes } from './venta';

export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public tipoproductosRoutes: TipoProductosRoutes = new TipoProductosRoutes();
    public productosRoutes: ProductosRoutes = new ProductosRoutes();
  
}
