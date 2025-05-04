import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Page2() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>这是页面 2</Text>
            <Button title="返回主页" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
