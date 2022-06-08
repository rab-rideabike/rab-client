import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Login from "./src/components/Login";
import { customTheme } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <StatusBar animated={true} />
        <SafeAreaProvider>
          <SafeAreaView>
              <Login />
          </SafeAreaView>
        </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
