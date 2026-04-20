import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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

export default function Search() {
  const [busqueda, setBusqueda] = useState("");
  const router = useRouter();

  const resultados = productos.filter((item) =>
    item.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔍 Buscar</Text>

      {/* 🔘 BOTONES */}
      <View style={styles.botones}>
        <TouchableOpacity style={styles.btnInicio} onPress={() => router.push("/")}>
          <Text style={styles.textoBtn}>🏠 Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCarrito} onPress={() => router.push("/cart")}>
          <Text style={styles.textoBtn}>🛒 Carrito</Text>
        </TouchableOpacity>
      </View>

      {/* 🔍 INPUT */}
      <TextInput
        style={styles.input}
        placeholder="Buscar producto..."
        value={busqueda}
        onChangeText={setBusqueda}
      />

      {/* 📦 RESULTADOS */}
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />

            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>${item.precio}</Text>

            {/* ➕ BOTÓN AGREGAR */}
            <TouchableOpacity
              style={styles.btnAgregar}
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.textoBtn}>Agregar</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  btnInicio: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  btnCarrito: {
    backgroundColor: "#50C878",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  textoBtn: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  imagen: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  precio: {
    color: "green",
    marginBottom: 8,
  },
  btnAgregar: {
    backgroundColor: "#4A90E2",
    padding: 8,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
});