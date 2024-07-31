import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { COLORS, SIZES } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const expenseTypes = {
  Groceries: '🥑',
  Snacks: '🍪',
  Cafes: '🍽️',
  Coffee: '☕',
  Drinks: '🍹',
  Beauty: '💄',
  Clothing: '👕',
  Accessories: '💍',
  Gifts: '🎁',
  Entertainment: '🍿',
  Home: '🏡',
  Tech: '📱',
  Subscriptions: '📅',
  Car: '🚗',
  Taxi: '🚖',
  Charity: '🎗️',
};

const MonthlyExpenses = ({ route, navigation }) => {
  const { expenses } = route.params;

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  const renderExpense = ({ item }) => (
    <View style={styles.expenseItem}>
      <Text style={styles.emoji}>{expenseTypes[item.type]}</Text>
      <View style={styles.expenseDetails}>
        <Text style={styles.expenseType}>{item.type}</Text>
        <Text style={styles.expenseAmount}>₺{item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalText}>Spent this month</Text>
        <Text style={styles.totalAmount}>₺{calculateTotal().toFixed(2)}</Text>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate('Home', { expenses })}
        >
          <Icon name="add" size={27} color={COLORS.white} />
        </Pressable>
      </View>
      <FlatList
        data={expenses}
        renderItem={renderExpense}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.expenseList}
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
  header: {
    alignItems: 'center', // İçeriği ortalayacak
    marginBottom: SIZES.xxLarge,

  },
  totalText: {
    top:20,
    fontSize: SIZES.large,
    color: COLORS.darkGray,
    textAlign: 'center', // Yazıyı ortalayacak
    marginBottom: SIZES.small,
  },
  totalAmount: {
    marginTop:20,
    fontSize: 50,
    textAlign: 'center', // Yazıyı ortalayacak
  },
  addButton: {
    alignItems:'center',
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: COLORS.black,
    borderRadius: 55,
    width:30,
    height:30,

  },
  expenseList: {
    paddingBottom: SIZES.large,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.small,
  },
  emoji: {
    fontSize: SIZES.xxLarge,
    marginRight: SIZES.small,
  },
  expenseDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseType: {
    fontSize: SIZES.medium,
    color: COLORS.darkGray,
  },
  expenseAmount: {
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
});

export default MonthlyExpenses;
