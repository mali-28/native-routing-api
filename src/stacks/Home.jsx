import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar, View, Stack } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const Home = ({ navigation }) =>{
    return <>
    <View style={styles.container}>
 <Stack space="5">
   <Button size="lg" backgroundColor="#6200ee" onPress={()=> navigation.navigate('Login')} > Login</Button>
   <Button size="lg" backgroundColor="#6200ee" onPress={()=> navigation.navigate('Signup')}> SignUp</Button>
</Stack>
{/* <HStack bg='#6200ee' px="1" py="3" justifyContent='space-between' alignItems='center'>
  <HStack space="4" alignItems='center'>
    <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
    <Text color="white" fontSize="20" fontWeight='bold'>Home</Text>
  </HStack>
  <HStack space="2">
    <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
    <IconButton icon={<Icon as={<MaterialIcons name='search' />}
    color="white" size='sm'  />} />
    <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
  </HStack>
</HStack> */}
</View>
    </>
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: "100%",
        flex: 0.7,
        backgroundColor: '#fff',

    },

});
export default Home;