import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function LastTenTransactionsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3C4A52" }}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Last 10 Transactions</Text>
      </View>

      {/* White Content Area */}
      <View style={styles.container}>
        {/* Account Card */}
        <View style={styles.accountCard}>
          <View style={styles.accountRow}>
            <View style={styles.accountTypeBox}>
              <Text style={styles.accountLabel}>Account Type</Text>
              <Text style={styles.accountValue}>Standard Savings</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.accountNumberBox}>
              <Text style={styles.accountLabel}>Account Number</Text>
              <Text style={styles.accountValue}>1051310245174</Text>
            </View>
          </View>
        </View>

        {/* Transactions List */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.transactionsContainer}>
            {/* Today Section */}
            <Text style={styles.dateHeader}>Today</Text>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIcon}>
                <Feather name="credit-card" size={20} color="#666" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>
                  MoMo and GIP Transfer
                </Text>
                <Text style={styles.transactionDate}>
                  30th June 2025, 12:30pm
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.debitAmount}>GHS 342.23</Text>
                <Text style={styles.balanceAmount}>GHS 2,468.93</Text>
              </View>
            </View>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIconDollar}>
                <Text style={styles.dollarSign}>$</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Wallet to Bank</Text>
                <Text style={styles.transactionDate}>
                  30th June 2025, 10:44am
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.creditAmount}>GHS 371.4</Text>
                <Text style={styles.balanceAmount}>GHS 2,811.16</Text>
              </View>
            </View>

            {/* Yesterday Section */}
            <Text style={styles.dateHeader}>Yesterday</Text>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIcon}>
                <Feather name="credit-card" size={20} color="#666" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>
                  MoMo and GIP Transfer
                </Text>
                <Text style={styles.transactionDate}>
                  29th June 2025, 11:00am
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.debitAmount}>GHS 120.93</Text>
                <Text style={styles.balanceAmount}>GHS 2,439.76</Text>
              </View>
            </View>

            {/* Tuesday, 28th June 2025 Section */}
            <Text style={styles.dateHeader}>Tuesday, 28th June 2025</Text>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIconDollar}>
                <Text style={styles.dollarSign}>$</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Wallet to Bank</Text>
                <Text style={styles.transactionDate}>
                  28th June 2025, 12:00pm
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.creditAmount}>GHS 146.21</Text>
                <Text style={styles.balanceAmount}>GHS 2,560.69</Text>
              </View>
            </View>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIconDollar}>
                <Text style={styles.dollarSign}>$</Text>
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>Wallet to Bank</Text>
                <Text style={styles.transactionDate}>
                  30th June 2025, 12:30pm
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.creditAmount}>GHS 24.21</Text>
                <Text style={styles.balanceAmount}>GHS 2,414.48</Text>
              </View>
            </View>

            <View style={styles.transactionCard}>
              <View style={styles.transactionIcon}>
                <Feather name="credit-card" size={20} color="#666" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>
                  MoMo and GIP Transfer
                </Text>
                <Text style={styles.transactionDate}>
                  30th June 2025, 12:30pm
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.debitAmount}>GHS 324.04</Text>
                <Text style={styles.balanceAmount}>GHS 2,390.27</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: -40, // pull up so it overlaps nicely like the screenshot
  },

  // Header
  header: {
    backgroundColor: "#3C4A52",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
    height: 100,
  },
  backButton: {
    marginRight: 16, 
    bottom:20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    bottom:20,
    right:-60,

  },

  // Account Card
  accountCard: {
    backgroundColor: "#FDB813",
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 12,
    padding: 15,
  },
  accountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountTypeBox: {
    flex: 1,
  },
  accountNumberBox: {
    flex: 1,
    alignItems: "flex-end",
  },
  divider: {
    width: 1,
    height: 35,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 12,
  },
  accountLabel: {
    fontSize: 10,
    color: "#000000",
    marginBottom: 4,
  },
  accountValue: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
  },

  // Transactions
  scrollView: {
    flex: 1,
  },
  transactionsContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 20,
  },
  dateHeader: {
    fontSize: 13,
    color: "#666",
    marginTop: 16,
    marginBottom: 10,
    marginLeft: 2,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
     // Drop shadow for iOS
     // Drop shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 6, // stronger vertical drop
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    // Drop shadow for Android
    elevation: 6,


  },
  transactionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  transactionIconDollar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dollarSign: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 14,
    color: "#888",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  creditAmount: {
    fontSize: 14,
    fontWeight: "400",
    color: "#399606",
    marginBottom: 3,
  },
  debitAmount: {
    fontSize: 14,
    fontWeight: "400",
    color: "#B50000",
    marginBottom: 3,
  },
  balanceAmount: {
    fontSize: 14,
    color: "#666",
  },
});
