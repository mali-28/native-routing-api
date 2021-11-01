import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
} from 'native-base';
import Title from "../components/Title";
const SignUp = () => {
    return <>

        <Box safeArea flex={1} p="2" w="90%" mx="auto" py="9">
            <Title text="Sign up" />


            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label
                        _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
                        Email
                    </FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label
                        _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
                        Password
                    </FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <FormControl>
                    <FormControl.Label
                        _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
                        Confirm Password
                    </FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
                    Sign up
                </Button>
            </VStack>
        </Box>








    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        backgroundColor: "#fff"

    }
})
export default SignUp;