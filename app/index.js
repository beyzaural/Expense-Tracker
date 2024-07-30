import React from 'react';
import Home from '../screens/Home';
import ExpenseTypeSelection from '../screens/ExpenseTypeSelection';
import MonthlyExpenses from '../screens/MonthlyExpenses';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppIndex = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ExpenseTypeSelection" component={ExpenseTypeSelection} />
      <Stack.Screen name="MonthlyExpenses" component={MonthlyExpenses} />
    </Stack.Navigator>
  );
};

export default AppIndex;
