export type NombreIcono =
| "flecha"
| "bolsa"
| "cerrar"
| "corazon"
| "menu"
| "buscar"
| "usuario";

type Props = {
nombre: NombreIcono;
relleno?: boolean;
};

const trazos: Record<NombreIcono, React.ReactNode> = {
flecha: <path d="M5 12h14m-5-5 5 5-5 5" />,
bolsa: (
<>
<path d="M5 8h14l-1 12H6L5 8Z" />
<path d="M9 9V6a3 3 0 0 1 6 0v3" />
</>
),
cerrar: <path d="m6 6 12 12M18 6 6 18" />,
corazon: (
<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z" />
),
menu: <path d="M4 7h16M4 12h16M4 17h16" />,
buscar: <path d="m21 21-4.4-4.4m2.4-5.1a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />,
usuario: (
<>
<circle cx="12" cy="8" r="4" />
<path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
</>
),
};

export default function Icono({ nombre, relleno = false }: Props) {
return (
<svg
aria-hidden="true"
fill={relleno ? "currentColor" : "none"}
height="22"
viewBox="0 0 24 24"
width="22"
xmlns="http://www.w3.org/2000/svg"
>
<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
{trazos[nombre]}
</g>
</svg>
);
}
