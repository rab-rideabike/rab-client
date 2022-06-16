import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ForgotPassword from "./src/components/ForgotPassword";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import { customTheme } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar animated={true} />
        <SafeAreaProvider>
          <SafeAreaView>
              <Login />
              {/* <Signup/> */}
              {/* <ForgotPassword/> */}
          </SafeAreaView>
        </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
