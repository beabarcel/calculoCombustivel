import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";

export default function ActionModal({
  handleClose,
  resultado,
  alcool,
  gasolina,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> {resultado} </Text>
      <Text style={styles.title}>Com os preços: </Text>
      <Text style={styles.title}>Alcool : R$ {alcool}</Text>
      <Text style={styles.title}>Gasolina : R$ {gasolina}</Text>

      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
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
