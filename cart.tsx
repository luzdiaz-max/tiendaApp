import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { eliminarDelCarrito, obtenerCarrito } from "./store";

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
        <Text style={styles.vacio}>No hay productos</Text>
      ) : (
        <FlatList
          data={carrito}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              
              <Image source={{ uri: item.imagen }} style={styles.imagen} />

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

      {/* 💰 TOTAL */}
      <Text style={styles.total}>Total: ${total}</Text>

      {/* 💳 BOTÓN IR A COMPRA */}
      {carrito.length > 0 && (
        <TouchableOpacity
          style={styles.btnComprar}
          onPress={() => router.push("/checkout")}
        >
          <Text style={styles.textoBtn}>Finalizar compra</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  vacio: {
    fontSize: 16,
    marginTop: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imagen: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  precio: {
    color: "#50C878",
    marginBottom: 5,
  },
  btnEliminar: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  btnComprar: {
    backgroundColor: "#50C878",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  textoBtn: {
    color: "white",
    fontWeight: "bold",
  },
  total: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
});