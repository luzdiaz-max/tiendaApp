import { createContext, useContext, useState } from "react";
const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [carrito, setCarrito] = useState<any[]>([]);

  const agregar = (producto: any) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const limpiar = () => setCarrito([]);

  return (
    <CartContext.Provider value={{ carrito, agregar, limpiar }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);