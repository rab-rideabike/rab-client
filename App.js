import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForgotPassword from "./src/components/ForgotPassword";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { customTheme } from "./src/theme";
import { Provider } from 'react-redux';
import store from "./src/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider theme={customTheme}>
      <StatusBar animated={true} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Forgot" component={ForgotPassword} />
            </Stack.Navigator>
          </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}
