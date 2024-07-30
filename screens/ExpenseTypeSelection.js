// screens/ExpenseTypeSelection.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const ExpenseTypeSelection = ({ route, navigation }) => {
  const { amount, expenses } = route.params;

  const addExpense = (type) => {
    const newExpenses = [...expenses, { amount, type }];
    navigation.navigate('MonthlyExpenses', { expenses: newExpenses });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Expense Type</Text>
      <Text style={styles.amount}>Amount: ${amount}</Text>
      <Button title="Groceries" onPress={() => addExpense('Groceries')} />
      <Button title="Coffee" onPress={() => addExpense('Coffee')} />
      <Button title="Clothes" onPress={() => addExpense('Clothes')} />
      <Button title="Food" onPress={() => addExpense('Food')} />
      <Button title="Others" onPress={() => addExpense('Others')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: SIZES.large,
    marginBottom: SIZES.medium,
  },
  amount: {
    fontSize: SIZES.medium,
    marginBottom: SIZES.large,
  },
});

export default ExpenseTypeSelection;
