import "./CuadriculaProductos.css";
import type { Producto } from "../datos/productos";
import TarjetaProducto from "./TarjetaProducto";

type Props = {
productos: Producto[];
favoritos: number[];
alAlternarFavorito: (id: number) => void;
alAgregarABolsa: () => void;
};

export default function CuadriculaProductos({
productos,
favoritos,
alAlternarFavorito,
alAgregarABolsa,
}: Props) {
return (
<div className="product-grid">
{productos.map((producto) => (
<TarjetaProducto
alAgregarABolsa={alAgregarABolsa}
alAlternarFavorito={alAlternarFavorito}
esFavorito={favoritos.includes(producto.id)}
key={producto.id}
producto={producto}
/>
))}
</div>
);
}
