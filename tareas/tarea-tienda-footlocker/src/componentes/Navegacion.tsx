import "./Navegacion.css";
import { itemsMenu } from "../datos/productos";

type Props = {
abierto: boolean;
alElegir: (item: string) => void;
alElegirRebajas: () => void;
};

export default function Navegacion({ abierto, alElegir, alElegirRebajas }: Props) {
return (
<nav aria-label="Navegación principal" className={abierto ? "nav nav-open" : "nav"}>
{itemsMenu.map((item) => (
<button className="nav-link" key={item} onClick={() => alElegir(item)}>
{item}
</button>
))}
<button className="nav-link sale-link" onClick={alElegirRebajas}>
Rebajas
</button>
</nav>
);
}
