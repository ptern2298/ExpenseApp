import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import CreateExpenseScreen from "./screens/CreateExpenseScreen";
import ExpenseDetailsScreen from "./screens/ExpenseDetailsScreen";
import CameraScreen from "./screens/CameraScreen";

const Stack = createStackNavigator();
export default function App() {

  const [expenses, setExpenses] = useState([
    { id: 0, title: 'McDonalds', price: 9.99 },
    { id: 1, title: 'Shoppers', price: 300.0 },
    { id: 2, title: 'Stapes', price: 250.0 }
  ])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'>
          <HomeScreen/>
        </Stack.Screen>
        <Stack.Screen name='Camera'>
          <CameraScreen/>
        </Stack.Screen>
        <Stack.Screen name='CreateExpense'>
          <CreateExpenseScreen/>
        </Stack.Screen>
        <Stack.Screen name='ExpenseDetails'>
          <ExpenseDetailsScreen/>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

