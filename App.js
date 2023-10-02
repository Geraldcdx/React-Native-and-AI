import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { HfInference } from "@huggingface/inference";
import MyComponent from './components/test_component'; // Import your new component
// import Huggingface from './components/huggingface';
// const HF_ACCESS_TOKEN = "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";
// const inference = new HfInference(HF_ACCESS_TOKEN);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Working? Lazy road Testing again?ssssssss?</Text>
      <MyComponent />
      {/* <Huggingface /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;