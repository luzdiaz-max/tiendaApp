import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { eliminarDelCarrito, limpiarCarrito, obtenerCarrito } from "./store";

export default function Cart() {
  const router = useRouter();

  const carrito = obtenerCarrito();

  const total = carrito.reduce((acum: number, item: any) => {
    return acum + item.precio;
  }, 0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>🛒 Carrito</Text>

      {carrito.length === 0 ? (
        <Text style={styles.vacio}>Tu carrito está vacío</Text>
      ) : (
        <FlatList
          data={carrito}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.precio}>${item.precio}</Text>

              <TouchableOpacity
                style={styles.btnEliminar}
                onPress={() => eliminarDelCarrito(index)}
              >
                <Text style={styles.textoBtn}>Eliminar</Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

      {/* 💰 Total */}
      <Text style={styles.total}>Total: ${total}</Text>

      {/* 🧾 Botones */}
      {carrito.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.btnComprar}
            onPress={() => {
              alert("Compra realizada ✅");
              limpiarCarrito();
              router.push("/");
            }}
          >
            <Text style={styles.textoBtn}>Finalizar compra</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnVaciar}
            onPress={() => limpiarCarrito()}
          >
            <Text style={styles.textoBtn}>Vaciar carrito</Text>
          </TouchableOpacity>
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111827",
  },
  vacio: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#6B7280",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  precio: {
    fontSize: 16,
    color: "#10B981",
    marginBottom: 10,
  },
  btnEliminar: {
    backgroundColor: "#EF4444",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#111827",
  },
  btnComprar: {
    backgroundColor: "#10B981",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  btnVaciar: {
    backgroundColor: "#7C3AED",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  textoBtn: {
    color: "white",
    fontWeight: "bold",
  },
});