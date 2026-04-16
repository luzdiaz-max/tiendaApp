import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { eliminarDelCarrito, obtenerCarrito } from "./store";

export default function Cart() {

  const carrito = obtenerCarrito();

  const total = carrito.reduce((acum: number, item: any) => {
    return acum + item.precio;
  }, 0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      <Text style={{ fontSize: 28 }}>🛒 Carrito</Text>

      {carrito.length === 0 ? (
        <Text>No hay productos</Text>
      ) : (
        <FlatList
          data={carrito}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ marginBottom: 10 }}>
              
              <Text>
                {item.nombre} - ${item.precio}
              </Text>

              <TouchableOpacity
                style={{ backgroundColor: "red", padding: 5, marginTop: 5 }}
                onPress={() => eliminarDelCarrito(index)}
              >
                <Text style={{ color: "white" }}>Eliminar</Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Total: ${total}
      </Text>

    </View>
  );
}