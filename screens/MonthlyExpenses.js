// screens/MonthlyExpenses.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const MonthlyExpenses = ({ route }) => {
  const { expenses } = route.params;

  const renderExpense = ({ item }) => (
    <View style={styles.expenseContainer}>
      <Text style={styles.expenseText}>{item.type}: ${item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Expenses</Text>
      <FlatList
        data={expenses}
        renderItem={renderExpense}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    marginBottom: SIZES.medium,
    textAlign: 'center',
  },
  expenseContainer: {
    marginBottom: SIZES.small,
    padding: SIZES.small,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.small,
  },
  expenseText: {
    fontSize: SIZES.medium,
  },
});

export default MonthlyExpenses;
