import "./TarjetaProducto.css";
import type { Producto } from "../datos/productos";
import Icono from "./Icono";

type Props = {
producto: Producto;
esFavorito: boolean;
alAlternarFavorito: (id: number) => void;
alAgregarABolsa: () => void;
};

export default function TarjetaProducto({
producto,
esFavorito,
alAlternarFavorito,
alAgregarABolsa,
}: Props) {
return (
<article className="product-card">
<div className="product-image-wrap">
<img alt={producto.nombre} className="product-image" src={producto.imagen} />
<span className="product-label">{producto.etiqueta}</span>
<button
aria-label={`${esFavorito ? "Quitar" : "Añadir"} ${producto.nombre} de favoritos`}
className={esFavorito ? "favorite-button favorited" : "favorite-button"}
onClick={() => alAlternarFavorito(producto.id)}
>
<Icono nombre="corazon" relleno={esFavorito} />
</button>
<button className="quick-add" onClick={alAgregarABolsa}>
AÑADIR A LA BOLSA
</button>
</div>
<div className="product-info">
<div>
<p className="product-category">{producto.categoria}</p>
<h3>{producto.nombre}</h3>
</div>
<strong>{producto.precio}</strong>
</div>
</article>
);
}
