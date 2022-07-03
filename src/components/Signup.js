import React, { useEffect, useReducer, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Icon,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { MaterialIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { signupUser } from "../store/user/thunk";

const initialState = {
  name: "",
  email: "",
  mobile: "",
  password: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "email":
      return { ...state, email: payload };
    case "mobile":
      return { ...state, mobile: payload };
    case "password":
      return { ...state, password: payload };
    default:
      return state;
  }
}

const Signup = () => {
  const dispatcher = useDispatch();
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleSignup = () => {
    if (
      validate() &&
      !usernameError &&
      !emailError &&
      !phoneError &&
      !passwordError
    ) {
      dispatcher(signupUser(user));
      // console.log(user);
    } else {
      // console.log(user);
      // console.log(errors);
    }
  };

  const validate = () => {
    let isValidUsername = false;
    let isValidEmail = false;
    let isValidPhone = false;
    let isValidPass = false;

    const VALID_EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (user.name.length < 4) {
      setUsernameError("Username is too short");
      isValidUsername = false;
    } else {
      setUsernameError("");
      isValidUsername = true;
    }

    if (!user.email.match(VALID_EMAIL_REGEX)) {
      setEmailError("Invalid Email");
      isValidEmail = false;
    } else {
      setEmailError("");
      isValidEmail = true;
    }

    if (!user.mobile.match("[0-9]{10}")) {
      setPhoneError("Mobile Number should be 10 digits");
      isValidPhone = false;
    } else {
      setPhoneError("");
      isValidPhone = true;
    }
    if (user.password.length < 5) {
      setPasswordError("Password should be atleast 5 digits");
      isValidPass = false;
    } else {
      setPasswordError("");
      isValidPass = true;
    }
    return isValidUsername && isValidEmail && isValidPass && isValidPhone;
  };

  return (
    <Center width="100%" h="100%">
      <ScrollView>
        <Box safeArea p="2" h="100%" w="100%" bg="dark.50">
          <Heading
            size="lg"
            fontSize="36"
            marginLeft="40px"
            fontWeight="600"
            color="white"
            _dark={{
              color: "white",
            }}
          >
            Create an
          </Heading>
          <Heading
            size="lg"
            fontSize="36"
            marginLeft="40px"
            marginBottom="30px"
            fontWeight="600"
            color="white"
            _dark={{
              color: "white",
            }}
          >
            account
          </Heading>

          <VStack space={3} mt="5">
            <Box marginLeft="40px" width="317px">
              <FormControl isInvalid={usernameError !== ""}>
                <Input
                  height="55px"
                  bg="#262626"
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="4"
                      color="muted.400"
                    />
                  }
                  onChangeText={(value) =>
                    dispatch({ type: "name", payload: value })
                  }
                  name="name"
                  placeholder="Username"
                  placeholderTextColor="muted.400"
                  borderColor="dark.100"
                  color="white"
                  borderRadius="10"
                  fontSize="14px"
                />
                {usernameError !== "" ? (
                  <FormControl.ErrorMessage marginBottom="10px">
                    {usernameError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>

              <FormControl isInvalid={emailError !== ""}>
                <Input
                  height="55px"
                  bg="#262626"
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="email" />}
                      size={5}
                      ml="4"
                      color="muted.400"
                    />
                  }
                  onChangeText={(value) =>
                    dispatch({ type: "email", payload: value })
                  }
                  name="email"
                  type="email"
                  placeholder="Email"
                  placeholderTextColor="muted.400"
                  borderColor="dark.100"
                  color="white"
                  borderRadius="10"
                  fontSize="14px"
                />
                {emailError !== "" ? (
                  <FormControl.ErrorMessage marginBottom="10px">
                    {emailError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={phoneError !== ""}>
                <Input
                  height="55px"
                  bg="#262626"
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="phone" />}
                      size={5}
                      ml="4"
                      color="muted.400"
                    />
                  }
                  type="text"
                  onChangeText={(value) =>
                    dispatch({ type: "mobile", payload: value })
                  }
                  name="mobile"
                  placeholder="Mobile Number"
                  placeholderTextColor="muted.400"
                  borderColor="dark.100"
                  color="white"
                  borderRadius="10"
                  fontSize="14px"
                />
                {phoneError !== "" ? (
                  <FormControl.ErrorMessage marginBottom="10px">
                    {phoneError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl isInvalid={passwordError !== ""}>
                <Input
                  height="55px"
                  type={show ? "text" : "password"}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="lock" />}
                      size={5}
                      ml="4"
                      color="muted.400"
                    />
                  }
                  bg="#262626"
                  InputRightElement={
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="4"
                      color="muted.400"
                      onPress={() => setShow(!show)}
                    />
                  }
                  onChangeText={(value) =>
                    dispatch({ type: "password", payload: value })
                  }
                  name="password"
                  placeholder="Password"
                  placeholderTextColor="muted.400"
                  borderColor="dark.100"
                  color="white"
                  borderRadius="10"
                  fontSize="14px"
                />
                {passwordError !== "" ? (
                  <FormControl.ErrorMessage marginBottom="10px">
                    {passwordError}
                  </FormControl.ErrorMessage>
                ) : (
                  ""
                )}
              </FormControl>

              <Link
                _text={{
                  fontSize: "xs",
                  color: "#676767",
                }}
                isUnderlined={false}
                mt="3"
              >
                By clicking on Register button, you agree to our policies
              </Link>
            </Box>
            {/* <Button mt="2" colorScheme="indigo">
            Sign in
          </Button> */}
            <HStack marginTop="40px">
              <Text
                fontSize="24px"
                _dark={{
                  color: "warmGray.200",
                }}
                marginLeft="40px"
                marginTop="5px"
                color="white"
                fontWeight="bold"
              >
                Register
              </Text>
              <Button
                borderRadius="51px"
                height="51px"
                width="51px"
                bg="warning.600"
                marginLeft="175px"
                onPress={handleSignup}
              >
                <AntDesign name="arrowright" size={24} color="white" />
              </Button>
            </HStack>
            <Text color="white" textAlign="center" marginTop="60px">
              sign up with
            </Text>
            <HStack marginLeft="90px" marginTop="5px">
              <Button
                bg="white"
                borderRadius="48px"
                width="48px"
                height="48px"
                marginRight="40px"
              >
                <AntDesign name="google" size={25} color="black" />
              </Button>

              <Button
                bg="white"
                borderRadius="48px"
                width="48px"
                height="48px"
                marginRight="40px"
              >
                <AntDesign name="apple1" size={25} color="black" />
              </Button>

              <Button
                bg="white"
                borderRadius="48px"
                width="48px"
                height="48px"
                marginRight="40px"
              >
                <FontAwesome name="facebook-f" size={25} color="#3D4DA6" />
              </Button>
            </HStack>

            <Link
              _text={{
                fontSize: "sm",
                color: "muted.400",
              }}
              marginTop="20px"
              alignSelf="center"
              isUnderlined={false}
            >
              Back
            </Link>
          </VStack>
        </Box>
      </ScrollView>
    </Center>
  );
};

export default Signup;
