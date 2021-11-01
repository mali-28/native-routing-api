import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Main from './src/components/Main';



function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;