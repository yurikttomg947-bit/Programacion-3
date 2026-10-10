import "./SeccionProductos.css";
import type { Producto } from "../datos/productos";
import CuadriculaProductos from "./CuadriculaProductos";
import FiltroCategorias from "./FiltroCategorias";
import Icono from "./Icono";

type Props = {
productos: Producto[];
categoria: string;
favoritos: number[];
alCambiarCategoria: (categoria: string) => void;
alAlternarFavorito: (id: number) => void;
alAgregarABolsa: () => void;
};

export default function SeccionProductos({
productos,
categoria,
favoritos,
alCambiarCategoria,
alAlternarFavorito,
alAgregarABolsa,
}: Props) {
return (
<section className="products-section" id="novedades">
<div className="section-heading">
<div>
<p className="eyebrow dark-eyebrow">SELECCIÓN DE LA SEMANA</p>
<h2>LO ÚLTIMO</h2>
</div>
<FiltroCategorias categoriaActual={categoria} alCambiar={alCambiarCategoria} />
</div>

<CuadriculaProductos
alAgregarABolsa={alAgregarABolsa}
alAlternarFavorito={alAlternarFavorito}
favoritos={favoritos}
productos={productos}
/>

<button className="outline-button">
VER TODA LA COLECCIÓN <Icono nombre="flecha" />
</button>
</section>
);
}
