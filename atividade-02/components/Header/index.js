import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.hdContainer}>
      <Text style={styles.hdText}>Qual melhor opção?</Text>
    </View>
  );
}
