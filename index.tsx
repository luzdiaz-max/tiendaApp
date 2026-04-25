import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { agregarAlCarrito } from "./store";

const productos = [
  {
    id: "1",
    nombre: "Playera",
    precio: 200,
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: "2",
    nombre: "Zapatos",
    precio: 800,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: "3",
    nombre: "Gorra",
    precio: 150,
    imagen: "https://images.unsplash.com/photo-1514996937319-344454492b37",
  },
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Tienda</Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.btnBuscar}
          onPress={() => router.push("/search")}
        >
          <Text style={styles.textoBtn}>🔍 Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCarrito}
          onPress={() => router.push("/cart")}
        >
          <Text style={styles.textoBtn}>🛒 Carrito</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/producto",
                params: {
                  nombre: item.nombre,
                  precio: item.precio,
                  imagen: item.imagen,
                },
              })
            }
          >
            <Image source={{ uri: item.imagen }} style={styles.imagen} />

            <View style={styles.info}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.precio}>${item.precio}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnAgregar}
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.textoBtn}>Agregar al carrito</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#111827",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  btnBuscar: {
    backgroundColor: "#7C3AED",
    padding: 12,
    borderRadius: 12,
    width: "48%",
    alignItems: "center",
  },
  btnCarrito: {
    backgroundColor: "#10B981",
    padding: 12,
    borderRadius: 12,
    width: "48%",
    alignItems: "center",
  },
  textoBtn: {
    color: "white",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  imagen: {
    width: 140,
    height: 140,
    borderRadius: 15,
    marginBottom: 10,
  },
  info: {
    alignItems: "center",
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
  btnAgregar: {
    backgroundColor: "#7C3AED",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
});