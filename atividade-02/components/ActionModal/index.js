import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";

export default function ActionModal({
  handleClose,
  resultado,
  alcool,
  gasolina,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.resultado}> {resultado} </Text>
      <Text style={styles.precos}>Com os preços: </Text>
      <Text style={styles.title}>Alcool: R$ {alcool}</Text>
      <Text style={styles.title}>Gasolina: R$ {gasolina}</Text>

      <TouchableOpacity style={styles.botao} onPress={handleClose}>
        <Text style={styles.botaoTitulo}>Calcular Novamente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  botaoTitulo: {
    color: "#ef4130",
    fontSize: 20,
  },
  botao: {
    marginTop: 35,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ef4130",
    paddingHorizontal: 32,
    paddingVertical: 2,
  },
  precos: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  resultado: {
    color: "#2bbb4b",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 25,
  },
  container: {
    backgroundColor: "#212121",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButton: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  actionText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
