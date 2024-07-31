// screens/Home.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ route, navigation }) => {
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState(route.params?.expenses || []);

  useEffect(() => {
    if (route.params?.expenses) {
      setExpenses(route.params.expenses);
    }
  }, [route.params?.expenses]);

  useEffect(() => {
    setAmount(''); // amount state'ini sıfırla
  }, [route.params?.expenses]);

  const handleKeyPress = (key) => {
    setAmount((prev) => (prev === '0' ? key : prev + key));
  };

  const handleDelete = () => {
    setAmount((prev) => (prev.length === 1 ? '0' : prev.slice(0, -1)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Expense Amount</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{"₺" + amount || "0"}</Text>
      </View>
      <View style={styles.keypadContainer}>
        <View style={styles.keypad}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"].map((key) => (
            <Pressable
              key={key}
              style={styles.key}
              onPress={() => (key === "⌫" ? handleDelete() : handleKeyPress(key))}
            >
              <Text style={styles.keyText}>{key}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <Pressable
        style={styles.nextButton}
        onPress={() => navigation.navigate('ExpenseTypeSelection', { amount, expenses })}
      >
        <Icon name="arrow-forward" size={30} color={COLORS.darkGray} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    marginBottom: SIZES.large, // bir ögenin alt kenarı ile altındaki diğer öge arasındaki boşluğu belirler.
    top: 40,
  },
  amountContainer: {
    width: '80%',
    padding: SIZES.small,
    marginTop: -10,
    marginBottom: SIZES.medium,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    top: 90,
    marginBottom: 10,
  },
  amountText: {
    fontSize: SIZES.xxLarge * 2,
    color: COLORS.black,
  },
  keypadContainer: {
    width: '100%',
    bottom: -120, // Adjust this value if needed to place it exactly at the bottom
    paddingHorizontal: SIZES.medium,
    alignSelf: 'flex-end',
    marginBottom: -30,
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: 'flex-end',
  },
  key: {
    width: "30%",
    margin: "1%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
  },
  keyText: {
    fontSize: SIZES.xLarge,
    color: COLORS.darkGray,
  },
  nextButton: {
    // marginTop ögesinin üst kenarına belirli bir boşluk ekler.
    backgroundColor: COLORS.white,
    padding: SIZES.small,
    borderRadius: 80,
    backgroundColor: COLORS.black,
    marginTop: SIZES.medium,
    width: 65,
    height: 65,
    padding: 17,
    marginRight: 60,
    alignSelf: 'flex-end',
    marginHorizontal: SIZES.medium, // Sağdan ve soldan eşit boşluk bırak
  },
  icon: {
    textAlign: 'center',
  },
});

export default Home;
