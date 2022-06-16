import React from 'react';
import { Box, Text, Heading, Icon, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";


const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return (
      <Center width="100%" h="100%">
           <Box safeArea p="2" h="100%" w="100%" bg="dark.50">
           <Heading size="lg" fontSize="36" marginLeft="40px" fontWeight="600" color="white" _dark={{
        color: "white"
      }}>
          Welcome
        </Heading>
        <Heading size="lg" fontSize="36" marginLeft="40px" marginBottom="30px" fontWeight="600" color="white" _dark={{
        color: "white"
      }}>
          Back!
        </Heading>
        
        <VStack space={3} mt="5">
        <Box marginLeft="40px" width="317px">
          <FormControl>
            <Input 
            height="55px" 
            bg="#262626"
            
            
            InputLeftElement={
              <Icon as={<MaterialIcons name="person" />} 
              size={5} 
              ml="4" 
              color="muted.400"
              />
            }
            marginBottom="20px"
            placeholder="Email"
            placeholderTextColor="muted.400"
            borderColor="dark.100"
            color="white"
            borderRadius="10"
            fontSize="14px"
             />
          </FormControl>
          <FormControl>
            <Input 
            height="55px" 
            type={show ? "text" : "password"}
            InputLeftElement={<Icon as={<MaterialIcons name="lock" />} 
            size={5} 
            ml="4" 
            color="muted.400"
             />}
            bg="#262626"
            InputRightElement={
              <Icon 
              as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
              size={5} 
              mr="4" 
              color="muted.400" 
              onPress={() => setShow(!show)} 
              />
            } 
            placeholder="Password"
            placeholderTextColor="muted.400"
            borderColor="dark.100"
            color="white"
            borderRadius="10"
            fontSize="14px"
             />
            <Link _text={{
            fontSize: "sm",
            fontWeight: "500",
            color: "warning.600"
            
          }}
          isUnderlined={false} 
          alignSelf="flex-end" mt="3">
              Forgot Password?
            </Link>
          </FormControl>
          </Box>
          {/* <Button mt="2" colorScheme="indigo">
            Sign in
          </Button> */}
          <HStack marginTop="40px" >
            <Text fontSize="24px"
             _dark={{
            color: "warmGray.200"
          
            }}
            marginLeft="40px"
            marginTop="5px"
            color="white"
            fontWeight="bold"
          >
              Sign In
            </Text>
            <Button borderRadius="51px" height="51px" width="51px" bg="warning.600" 
            marginLeft="190px">
            <AntDesign name="arrowright" size={24} color="white" />
            </Button>
           
          </HStack>
          <Text color="white" textAlign="center" marginTop="100px">
              sign in with
          </Text>
          <HStack marginLeft="90px" marginTop="5px"  >
            <Button bg="white" borderRadius="48px" width="48px" height="48px" marginRight="40px">
            <AntDesign name="google" size={25} color="black" />
            </Button>

            <Button bg="white" borderRadius="48px" width="48px" height="48px" marginRight="40px">
            <AntDesign name="apple1" size={25} color="black" />
            </Button>

            <Button bg="white" borderRadius="48px" width="48px" height="48px" marginRight="40px">
            <FontAwesome name="facebook-f" size={25} color="#3D4DA6" />
            </Button>
          </HStack>

          <Link _text={{
            fontSize: "sm",
            color: "muted.400",
          }}
          marginTop="50px"
          alignSelf="center"
          isUnderlined={false} 
          >
             New to Ride a Bike? <Text color="white" bold onPress={() => navigation.navigate("Signup")}> Signup</Text>
            </Link>

        </VStack>

           </Box>
      </Center>
  )
}

export default Login;