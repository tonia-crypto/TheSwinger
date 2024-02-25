import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';


export default function App() {
  const onStartPress = () => {
    console.log('Login Button pressed!');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.welcomeText}>Let's Swing!</Text>
      <TouchableOpacity style={styles.LoginButton} onPress={onStartPress}>
        <Text style={styles.LoginButtonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: 'beige', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 22,
    marginBottom: 20,
    color: '#000', 
  },
  LoginButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  LoginButtonText: {
    color: '#000',
    fontSize: 18,
  },
});
