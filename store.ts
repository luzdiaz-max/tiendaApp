let carrito: any[] = [];

export const agregarAlCarrito = (producto: any) => {
  carrito.push(producto);
};

export const obtenerCarrito = () => {
  return carrito;
};

export const eliminarDelCarrito = (index: number) => {
  carrito.splice(index, 1);
};

// 🔥 AGREGA ESTA FUNCIÓN
export const limpiarCarrito = () => {
  carrito = [];
};