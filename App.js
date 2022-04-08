import { CardField, StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [publishableKey, setPublishableKey] = useState("");
  return (
    <StripeProvider
      publishableKey={publishableKey}
    >
      <View style={styles.container}>
        <TextInput placeholder="Nombre" />
        <CardField />
        <StatusBar style="auto" />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
