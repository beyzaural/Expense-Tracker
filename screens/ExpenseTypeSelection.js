import React, { useState } from 'react';
import { View, Text, Button,Pressable, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const expenseTypes = [
  { type: 'Groceries', emoji: '🥑' },
  { type: 'Snacks', emoji: '🍪' },
  { type: 'Cafes', emoji: '🍽️' },
  { type: 'Coffee', emoji: '☕' },
  { type: 'Drinks', emoji: '🍹' },
  { type: 'Beauty', emoji: '💄' },
  { type: 'Clothing', emoji: '👕' },
  { type: 'Accessories', emoji: '💍' },
  { type: 'Gifts', emoji: '🎁' },
  { type: 'Entertainment', emoji: '🍿' },
  { type: 'Home', emoji: '🏡' },
  { type: 'Tech', emoji: '📱' },
  { type: 'Subscriptions', emoji: '📅' },
  { type: 'Car', emoji: '🚗' },
  { type: 'Taxi', emoji: '🚖' },
  { type: 'Charity', emoji: '🎗️' },
];

const ExpenseTypeSelection = ({ route, navigation }) => {
  const { amount, expenses } = route.params;

  const addExpense = (type) => {
    const newExpenses = [...expenses, { amount, type }];
    navigation.navigate('MonthlyExpenses', { expenses: newExpenses });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Expense Type</Text>
      <View style={styles.expenseTypesContainer}>
        {expenseTypes.map(({ type, emoji }) => (
          <Pressable key={type} style={styles.expenseType} onPress={() => addExpense(type)}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.typeText}>{type}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  title: {
    marginTop: -30,
    fontSize: SIZES.xLarge,
    marginBottom: 30,
  },
  expenseTypesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  expenseType: {
    alignItems: 'center',
    margin: SIZES.small,
    width: '15%',
  },
  emoji: {
    fontSize: SIZES.xxLarge,
    marginBottom: SIZES.small,
  },
  typeText: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    color: COLORS.darkGray,
    textAlign: 'center',
  },
});

export default ExpenseTypeSelection;