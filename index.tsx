import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
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
        <TouchableOpacity style={styles.btnBuscar} onPress={() => router.push("/search")}>
          <Text style={styles.textoBtn}>🔍 Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCarrito} onPress={() => router.push("/cart")}>
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

            <Text style={styles.nombre}>{item.nombre}</Text>

            <Text style={styles.precio}>${item.precio}</Text>

            <TouchableOpacity
              style={styles.btnAgregar}
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.textoBtn}>Agregar</Text>
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
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  btnBuscar: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 12,
    width: "48%",
    alignItems: "center",
  },
  btnCarrito: {
    backgroundColor: "#50C878",
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
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  precio: {
    fontSize: 16,
    color: "#50C878",
    marginBottom: 10,
  },
  btnAgregar: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});