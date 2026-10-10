import "./Portada.css";
import Icono from "./Icono";

type Props = {
alComprar: () => void;
};

export default function Portada({ alComprar }: Props) {
return (
<section className="hero">
<img
alt="Modelo con un conjunto urbano de la nueva colección"
className="hero-image"
src="https://images.unsplash.com/photo-1641918173719-61463ef761e7?auto=format&fit=crop&w=1800&q=90"
/>
<div className="hero-shade" />
<div className="hero-index">01 / 03</div>
<div className="hero-content">
<p className="eyebrow">NUEVA COLECCIÓN · 2025</p>
<h1>
DOMINA
<br />
LA CALLE
</h1>
<p className="hero-copy">
Prendas que hablan por ti. Diseñadas para moverte, creadas para destacar.
</p>
<button className="primary-button" onClick={alComprar}>
COMPRAR AHORA <Icono nombre="flecha" />
</button>
</div>
<p className="vertical-copy">STREETWEAR / EVERYDAY / EVERYWHERE</p>
</section>
);
}
