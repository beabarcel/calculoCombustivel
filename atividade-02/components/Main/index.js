import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import ActionModal from "../ActionModal";

export default function Main() {
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [erro, setErro] = useState("");

  function calcular() {
    if (!alcool || !gasolina) {
      setErro("Preencha a gasolina e o alcool.");
      return;
    }
    const valorAlcool = parseFloat(alcool);
    const valorGasolina = parseFloat(gasolina);
    const result = valorAlcool / valorGasolina;
    if (result < 0.7) {
      setResultado("Compensa usar Álcool.");
      setMostrarModal(true);
    } else {
      setResultado("Compensa usar Gasolina.");
      setMostrarModal(true);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Modal visible={mostrarModal} transparent={true}>
        <ActionModal
          handleClose={() => setMostrarModal(false)}
          resultado={resultado}
          alcool={alcool}
          gasolina={gasolina}
        />
      </Modal>
      <Text style={styles.mainText}>Álcool (preço por litro):</Text>
      <TextInput
        inputMode="numeric"
        style={styles.mainInput}
        placeholder="0.00"
        value={alcool}
        onChangeText={(t) => setAlcool(t)}
      />
      <Text style={styles.mainText}>Gasolina (preço por litro):</Text>
      <TextInput
        inputMode="numeric"
        style={styles.mainInput}
        placeholder="0.00"
        value={gasolina}
        onChangeText={(t) => setGasolina(t)}
      />
      <TouchableOpacity
        style={styles.mainButton}
        title="Calcular"
        onPress={calcular}
      >
        <Text style={styles.mainButtonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.mainTextResultado}>{erro}</Text>
    </View>
  );
}
