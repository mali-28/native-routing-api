import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from 'native-base';
import Title from "../components/Title";
const Login = () => {
    return <>
    <Box safeArea flex={1} p="2" py="10" w="90%" mx="auto">
        <Title text="Sign In"/>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Email ID
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input type="password" />
            <Link
              _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>

    </>
}
export default Login;