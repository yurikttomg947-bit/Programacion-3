import "./Encabezado.css";
import { useState } from "react";
import AccionesEncabezado from "./AccionesEncabezado";
import Icono from "./Icono";
import Navegacion from "./Navegacion";

type Props = {
cantidadBolsa: number;
alElegirCategoria: (categoria: string) => void;
irATienda: () => void;
};

export default function Encabezado({ cantidadBolsa, alElegirCategoria, irATienda }: Props) {
const [menuAbierto, setMenuAbierto] = useState(false);

const elegirItem = (item: string) => {
if (item === "Hombre" || item === "Mujer") alElegirCategoria(item);
irATienda();
setMenuAbierto(false);
};

return (
<header className="header">
<button
aria-expanded={menuAbierto}
aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
className="icon-button mobile-menu-button"
onClick={() => setMenuAbierto(!menuAbierto)}
>
<Icono nombre={menuAbierto ? "cerrar" : "menu"} />
</button>

<button
aria-label="Ir al inicio"
className="wordmark"
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
<span>FOOT</span>LOCKER
</button>

<Navegacion abierto={menuAbierto} alElegir={elegirItem} alElegirRebajas={irATienda} />

<AccionesEncabezado cantidadBolsa={cantidadBolsa} />
</header>
);
}
