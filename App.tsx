import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/splash';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.preventAutoHideAsync();
      // Simulate a heavy load task
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await SplashScreen.hideAsync();
    }
    hideSplashScreen();
  }, []);

  return (
    <View>
      <Splash/>
    </View>
    
  );
}
export default App
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
