import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#212121",
  },
});
