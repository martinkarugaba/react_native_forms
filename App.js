import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(false);

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={styles.container}>
      <View style={styles.form}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        /> 
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Log in" onPress={() => {}}></Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 50,
  },
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    width: '70%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 50,
  },
});
