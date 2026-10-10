export type Producto = {
id: number;
categoria: "Hombre" | "Mujer";
nombre: string;
precio: string;
etiqueta: string;
imagen: string;
};

export const productos: Producto[] = [
{
id: 1,
categoria: "Hombre",
nombre: "Sudadera Essential",
precio: "89,99 €",
etiqueta: "NUEVO",
imagen:
"https://images.unsplash.com/photo-1624223237138-21a37e61dec0?auto=format&fit=crop&w=900&q=85",
},
{
id: 2,
categoria: "Mujer",
nombre: "Camiseta Retro Varsity",
precio: "44,99 €",
etiqueta: "EXCLUSIVO",
imagen:
"https://images.unsplash.com/photo-1617212321775-32af775d6c44?auto=format&fit=crop&w=900&q=85",
},
{
id: 3,
categoria: "Hombre",
nombre: "Chaqueta Urban Tech",
precio: "119,99 €",
etiqueta: "TOP VENTAS",
imagen:
"https://images.unsplash.com/photo-1612029938221-a01e8c947edb?auto=format&fit=crop&w=900&q=85",
},
{
id: 4,
categoria: "Mujer",
nombre: "Conjunto Track 90",
precio: "99,99 €",
etiqueta: "NUEVO",
imagen:
"https://images.unsplash.com/photo-1779154138210-18cd7f96f7a5?auto=format&fit=crop&w=900&q=85",
},
];

export const categorias = ["Todo", "Hombre", "Mujer"];

export const itemsMenu = ["Novedades", "Hombre", "Mujer", "Niños"];
