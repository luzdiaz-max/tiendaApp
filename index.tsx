import { useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
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

  const agregar = (item: any) => {
    agregarAlCarrito(item);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f5f5f5" }}>
      
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        🛍️ Tienda
      </Text>

      {/* 🔍 BOTÓN BUSCAR */}
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => router.push("/search")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          🔍 Buscar
        </Text>
      </TouchableOpacity>

      {/* 🛒 BOTÓN CARRITO */}
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 8,
          marginBottom: 15,
        }}
        onPress={() => router.push("/cart")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          🛒 Ir al carrito
        </Text>
      </TouchableOpacity>

      {/* 📦 LISTA DE PRODUCTOS */}
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.imagen }}
              style={{ width: 120, height: 120, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16 }}>{item.nombre}</Text>

            <Text style={{ color: "green", marginBottom: 5 }}>
              ${item.precio}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "black",
                padding: 8,
                borderRadius: 6,
                width: "100%",
              }}
              onPress={() => agregar(item)}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Agregar al carrito
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}