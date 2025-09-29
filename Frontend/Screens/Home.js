import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; // navigation hook

const Home = () => {
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);
  const [activeTab, setActiveTab] = useState("Recent");
  const navigation = useNavigation();

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3C4A52" />

      {/* Header Section */}
      <View style={styles.header}>
        <SafeAreaView>
          <View style={styles.headerContent}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <Icon name="account" size={26} color="#3C4A52" />
              </View>
              <View style={styles.welcomeText}>
                <Text style={styles.welcomeLabel}>Welcome,</Text>
                <Text style={styles.userName}>Leslie Allotey</Text>
                <Text style={styles.lastLogin}>Last login date : 20-08-2025 8:56pm</Text>

                <View style={styles.headerAccountsRow}>
                  <Text style={styles.headerAccountsTitle}>My Accounts</Text>
                  <TouchableOpacity>
                    <Text style={styles.headerViewAccounts}>View Accounts</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="bell-outline" size={22} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => navigation.replace("Login")} // Navigate to Login
              >
                <Icon name="power" size={22} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/* Main Body */}
      <View style={styles.mainBody}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Accounts Section */}
          <View style={styles.accountsSection}>
            <Text style={styles.accountType}>Standard Savings</Text>
            <Text style={styles.accountNumber}>1051310245174</Text>

            <View style={styles.accountCard}>
              <View style={styles.balanceSection}>
                <Text style={styles.balanceAmount}>
                  GHS {isBalanceHidden ? 'XXXX.XX' : '0.00'}
                </Text>
                <TouchableOpacity onPress={toggleBalanceVisibility}>
                  <Icon 
                    name={isBalanceHidden ? "eye-off-outline" : "eye-outline"} 
                    size={22} 
                    color="#3C4A52" 
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.accountActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <View style={styles.actionIconContainer}>
                    <Icon name="share-variant-outline" size={22} color="#F7C94C" />
                  </View>
                  <Text style={styles.actionText}>Share</Text>
                  <Text style={styles.actionSubtext}>Details</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("LastTenTransactionsScreen")} // Navigate
                >
                  <View style={styles.actionIconContainer}>
                    <Icon name="file-document-outline" size={22} color="#F7C94C" />
                  </View>
                  <Text style={styles.actionText}>Last 10</Text>
                  <Text style={styles.actionSubtext}>Transactions</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Quick Access Section */}
          <View style={styles.quickAccessSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Quick Access</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickAccessGrid}>
              <TouchableOpacity style={styles.quickAccessItem}>
                <View style={styles.quickAccessIcon}>
                  <Feather name="repeat" size={22} color="#F7C94C" />
                </View>
                <Text style={styles.quickAccessLabel}>Transfers</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickAccessItem}>
                <View style={styles.quickAccessIcon}>
                  <Feather name="file-text" size={22} color="#F7C94C" />
                </View>
                <Text style={styles.quickAccessLabel}>Pay Bills</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickAccessItem}>
                <View style={styles.quickAccessIcon}>
                  <Feather name="smartphone" size={22} color="#F7C94C" />
                </View>
                <Text style={styles.quickAccessLabel}>Buy Airtime</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.quickAccessItem}>
                <View style={styles.quickAccessIcon}>
                  <Feather name="smartphone" size={22} color="#F7C94C" />
                </View>
                <Text style={styles.quickAccessLabel}>Mobile Money</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Section - Tabs */}
          <View style={styles.bottomSection}>
            <View style={styles.bottomButtons}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "Recent" && styles.tabButtonActive,
                ]}
                onPress={() => setActiveTab("Recent")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "Recent" && styles.tabTextActive,
                  ]}
                >
                  Recent Activities
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "GCB" && styles.tabButtonActive,
                ]}
                onPress={() => setActiveTab("GCB")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "GCB" && styles.tabTextActive,
                  ]}
                >
                  GCB Flash
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="dots-grid" size={28} color="#F7C94C" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#3C4A52" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="dollar" size={22} color="#8B95A1" />
          <Text style={styles.navLabelInactive}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="credit-card-outline" size={24} color="#8B95A1" />
          <Text style={styles.navLabelInactive}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="help-circle-outline" size={24} color="#8B95A1" />
          <Text style={styles.navLabelInactive}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="dots-horizontal" size={24} color="#8B95A1" />
          <Text style={styles.navLabelInactive}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // same styles as before...
  container: {
    flex: 1,
    backgroundColor: '#3C4A52',
  },
  header: {
    backgroundColor: '#3C4A52',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F7C94C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  welcomeText: {
    flex: 1,
    fontSize: 16,
  },
  welcomeLabel: {
    color: '#FFF',
    fontSize: 16,
    opacity: 0.9,
  },
  userName: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 2,
  },
  lastLogin: {
    color: '#FFF',
    fontSize: 12,
    opacity: 0.7,
    marginTop: 3,
  },
  headerAccountsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginLeft:-65,
    bottom:-40,
    width: '170%',
  },
  headerAccountsTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '350',
  },
  headerViewAccounts: {
    color: '#FFFFFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    opacity: 0.95,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 5,
  },
  mainBody: {
    flex: 1,
    backgroundColor: '#ffffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  accountsSection: {
    paddingHorizontal: 20,
    top: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
    top:10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  viewAccounts: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  accountCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    top:-30,
    width:319,
    height:176,
    left:10,
  },
  accountType: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
    left:20,
  },
  accountNumber: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginBottom: 12,
    left:200,
    bottom:20,
  },
  balanceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '70%',
    left:30,
    top:10,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: '350',
    color: '#000',
  },
  accountActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
  },
  actionButton: {
    alignItems: 'center',
    bottom:15,
  },
  actionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 23,
    backgroundColor: '#3C4A52',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
  },
  actionSubtext: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
  quickAccessSection: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  viewAll: {
    fontSize: 13,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickAccessItem: {
    alignItems: 'center',
    width: '23%',
  },
  quickAccessIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3C4A52',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickAccessLabel: {
    fontSize: 12,
    color: '#3C4A52',
    textAlign: 'center',
  },
  bottomSection: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#E8EAED',
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#3C4A52',
  },
  tabText: {
    fontSize: 14,
    color: '#3C4A52',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#FFF',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3C4A52',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: '#E8EAED',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navLabel: {
    fontSize: 11,
    color: '#3C4A52',
    marginTop: 5,
    fontWeight: '500',
  },
  navLabelInactive: {
    fontSize: 11,
    color: '#8B95A1',
    marginTop: 5,
  },
});

export default Home;
