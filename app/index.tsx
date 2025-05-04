import { Link , useRouter } from 'expo-router';
import { View, Button, StyleSheet } from 'react-native';
import Page1 from './page1';
import Page2 from './page2';

export default function Home() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        title="跳转页面 1"
        onPress={() => router.push('/page1')}
      />
      <Button
        title="跳转页面 2"
        onPress={() => router.push('/page2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});