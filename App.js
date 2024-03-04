import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="email@example.com"
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize="none"
        // secureTextEntry
        // keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.multilineTextInput]}
        placeholder="message"
        multiline
      />

      <Text style={styles.text}>My name is {name}</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 2,
    width: 400,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  multilineTextInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
});
