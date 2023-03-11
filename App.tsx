import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './screens/splash';
import SignUp from './screens/signUp';
import Login from './screens/login';
import PersonalProfile from './screens/profile';


const App = () => {
  let [fontsLoads] = useFonts({
    "Baloo2-Bold": require("./assets/fonts/Baloo2-Bold.ttf"),
    "Baloo2-Medium": require("./assets/fonts/Baloo2-Medium.ttf"),
    "Baloo2-Regular": require("./assets/fonts/Baloo2-Regular.ttf"),
    "Baloo2-SemiBold": require("./assets/fonts/Baloo2-SemiBold.ttf"),
    "LeckerliOne-Regular": require("./assets/fonts/LeckerliOne-Regular.ttf"),
  })
  if(!fontsLoads){
    return <AppLoading/>
  }

  return (
    <View>
      <PersonalProfile/>
    </View>
    
      
    
  );
}
export default App


