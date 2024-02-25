import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// Login Screen Component
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Let's Swing!</Text>
      <TouchableOpacity
        style={styles.BasicButton}
        onPress={() => navigation.navigate('HomeScreen')} 
      >
        <Text style={styles.BasicButtonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

// Home Screen Component (the new page you navigate to after login)
function HomeScreen({ navigation }) {
  // Updated function to handle option selection and navigate
  const onOptionSelect = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Choose a Swing to Practice!</Text>
      <TouchableOpacity
        style={styles.BasicButton}
        onPress={() => onOptionSelect('Serve')}
      >
        <Text style={styles.BasicButtonText}>Serve</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BasicButton}
        onPress={() => onOptionSelect('ForehandStroke')}
      >
        <Text style={styles.BasicButtonText}>Forehand Stroke</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.BasicButton}
        onPress={() => onOptionSelect('BackhandGroundstroke')}
      >
        <Text style={styles.BasicButtonText}>Backhand Groundstroke</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function ServeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Serve Practice</Text>
    </View>
  );
}

function ForehandStrokeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Forehand Stroke Practice</Text>
    </View>
  );
}

function BackhandGroundstrokeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Backhand Groundstroke Practice</Text>
    </View>
  );
}
// Stack Navigator
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{  }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Serve" component={ServeScreen} />
        <Stack.Screen name="ForehandStroke" component={ForehandStrokeScreen} />
        <Stack.Screen name="BackhandGroundstroke" component={BackhandGroundstrokeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  BasicButton: {
    backgroundColor: '#ff69b4',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 5,
  },
  BasicButtonText: {
    color: '#000',
    fontSize: 18,
  },
  
});
