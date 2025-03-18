import * as React from 'react';
import Characters from './components/CharactersList';
import CharacterItem from './components/CharacterItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CharactersPreview">
        <Stack.Screen name="CharactersPreview" component={Characters}/>
        <Stack.Screen name="CharacterItem" component={CharacterItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    MyStack()
  );
}

