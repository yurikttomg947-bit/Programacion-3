import "./AccionesEncabezado.css";
import Icono from "./Icono";

type Props = {
cantidadBolsa: number;
};

export default function AccionesEncabezado({ cantidadBolsa }: Props) {
return (
<div className="header-actions">
<button aria-label="Buscar" className="icon-button search-action">
<Icono nombre="buscar" />
</button>
<button aria-label="Mi cuenta" className="icon-button">
<Icono nombre="usuario" />
</button>
<button aria-label={`Bolsa, ${cantidadBolsa} artículos`} className="icon-button bag-button">
<Icono nombre="bolsa" />
<span className="bag-count">{cantidadBolsa}</span>
</button>
</div>
);
}
