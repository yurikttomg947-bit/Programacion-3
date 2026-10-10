import { useState } from "react";
import BarraAnuncio from "./componentes/BarraAnuncio";
import Encabezado from "./componentes/Encabezado";
import Marquesina from "./componentes/Marquesina";
import PiePagina from "./componentes/PiePagina";
import Portada from "./componentes/Portada";
import SeccionProductos from "./componentes/SeccionProductos";
import { productos } from "./datos/productos";

export default function App() {
const [categoria, setCategoria] = useState("Todo");
const [favoritos, setFavoritos] = useState<number[]>([]);
const [cantidadBolsa, setCantidadBolsa] = useState(0);

const productosVisibles =
categoria === "Todo" ? productos : productos.filter((producto) => producto.categoria === categoria);

const alternarFavorito = (id: number) => {
setFavoritos((actual) =>
actual.includes(id) ? actual.filter((item) => item !== id) : [...actual, id],
);
};

const irATienda = () => {
document.querySelector("#novedades")?.scrollIntoView({ behavior: "smooth" });
};

return (
<div className="site-shell">
<BarraAnuncio />
<Encabezado
alElegirCategoria={setCategoria}
cantidadBolsa={cantidadBolsa}
irATienda={irATienda}
/>
<main>
<Portada alComprar={irATienda} />
<Marquesina />
<SeccionProductos
alAgregarABolsa={() => setCantidadBolsa((cantidad) => cantidad + 1)}
alAlternarFavorito={alternarFavorito}
alCambiarCategoria={setCategoria}
categoria={categoria}
favoritos={favoritos}
productos={productosVisibles}
/>
</main>
<PiePagina />
</div>
);
}
