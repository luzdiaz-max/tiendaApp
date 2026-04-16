let carrito: any[] = [];

export const agregarAlCarrito = (producto: any) => {
  carrito.push(producto);
};

export const eliminarDelCarrito = (index: number) => {
  carrito.splice(index, 1);
};

export const obtenerCarrito = () => carrito;