import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { limpiarCarrito } from "./store";

export default function Checkout() {
  const router = useRouter();

  const finalizarCompra = () => {
    limpiarCarrito();
    alert("¡Compra realizada con éxito! 🎉");
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>💳 Confirmar compra</Text>

      <Text style={styles.texto}>
        ¿Deseas finalizar tu compra?
      </Text>

      <TouchableOpacity style={styles.btn} onPress={finalizarCompra}>
        <Text style={styles.textoBtn}>Confirmar compra</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnCancelar}
        onPress={() => router.back()}
      >
        <Text style={styles.textoBtn}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#50C878",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  btnCancelar: {
    backgroundColor: "gray",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  textoBtn: {
    color: "white",
    fontWeight: "bold",
  },
});