import React from 'react';
import { Box, Text, Heading, Icon, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";


const ForgotPassword = () => {
  const [show, setShow] = React.useState(false);
  return (
      <Center width="100%" h="100%">
           <Box safeArea p="2" h="100%" w="100%" bg="dark.50">
           <Heading size="lg" fontSize="36" marginLeft="40px" fontWeight="600" color="white" _dark={{
        color: "white"
      }}>
          Forgot
        </Heading>
        <Heading size="lg" fontSize="36" marginLeft="40px" marginBottom="30px" fontWeight="600" color="white" _dark={{
        color: "white"
      }}>
         Password?
        </Heading>
        
        <VStack space={3} mt="5">
        <Box marginLeft="40px" width="317px">
          <FormControl>
            <Input 
            height="55px" 
            bg="#262626"
            
            
            InputLeftElement={
              <Icon as={<MaterialIcons name="email" />} 
              size={5} 
              ml="4" 
              color="muted.400"
              />
            }
            marginBottom="5px"
            placeholder="Enter your email address"
            placeholderTextColor="muted.400"
            borderColor="dark.100"
            color="white"
            borderRadius="10"
            fontSize="14px"
             />
          </FormControl>
          <Link _text={{
            fontSize: "xs",
            color: "#676767"
            
          }}
          isUnderlined={false} 
          alignSelf="start" mt="3">
              We will send you a message to set or reset your password
            </Link>
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
              Send Code
            </Text>
            <Button borderRadius="51px" height="51px" width="51px" bg="warning.600" 
            marginLeft="145px">
            <AntDesign name="arrowright" size={24} color="white" />
            </Button>
           
          </HStack>

          <Link _text={{
            fontSize: "sm",
            color: "muted.400",
          }}
          marginTop="380px"
          alignSelf="center"
          isUnderlined={false} 
          >
              Back
            </Link>

        </VStack>

           </Box>
      </Center>
  )
}

export default ForgotPassword;