import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/src/BasicComponents/Button/button";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Home</Text>
      </View>
      <Button
        title="按钮 Button"
        size="sm"
        onPress={() => router.push("/example/Button/ButtonEx")}
        containerStyle={{ width: "80%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 10,
  },
});
