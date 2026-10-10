import "./FiltroCategorias.css";
import { categorias } from "../datos/productos";

type Props = {
categoriaActual: string;
alCambiar: (categoria: string) => void;
};

export default function FiltroCategorias({ categoriaActual, alCambiar }: Props) {
return (
<div className="category-tabs" role="group" aria-label="Filtrar productos">
{categorias.map((item) => (
<button
aria-pressed={categoriaActual === item}
className={categoriaActual === item ? "filter active-filter" : "filter"}
key={item}
onClick={() => alCambiar(item)}
>
{item}
</button>
))}
</div>
);
}
