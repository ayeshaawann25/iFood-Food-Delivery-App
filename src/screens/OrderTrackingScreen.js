import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OrderTrackingScreen = ({ route, navigation }) => {
  const { orderItems, total } = route.params;
  const [orderStatus, setOrderStatus] = useState(0);
  const [timer, setTimer] = useState(0);

  const statuses = [
    { icon: 'checkmark-circle', label: 'Order Placed', time: 'Just now' },
    { icon: 'restaurant', label: 'Preparing', time: '5-10 min' },
    { icon: 'bicycle', label: 'On the Way', time: '15-20 min' },
    { icon: 'home', label: 'Delivered', time: '25-30 min' },
  ];

  useEffect(() => {
    // Simulate order progress
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev >= 30) {
          setOrderStatus(3);
          clearInterval(interval);
          return prev;
        } else if (prev >= 20) {
          setOrderStatus(2);
        } else if (prev >= 10) {
          setOrderStatus(1);
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.orderNumber}>Order #{Math.floor(Math.random() * 10000)}</Text>
          <Text style={styles.estimatedTime}>⏱️ Estimated: {statuses[orderStatus].time}</Text>
        </View>

        <View style={styles.statusContainer}>
          {statuses.map((status, index) => (
            <View key={index} style={styles.statusItem}>
              <View style={styles.statusLine}>
                {index < statuses.length - 1 && (
                  <View style={[
                    styles.line,
                    index < orderStatus && styles.lineActive
                  ]} />
                )}
              </View>
              <View style={[
                styles.statusCircle,
                index <= orderStatus && styles.statusCircleActive
              ]}>
                <Icon 
                  name={index <= orderStatus ? 'checkmark' : 'time-outline'} 
                  size={20} 
                  color={index <= orderStatus ? '#FFF' : '#999'} 
                />
              </View>
              <View style={styles.statusContent}>
                <Text style={[
                  styles.statusLabel,
                  index <= orderStatus && styles.statusLabelActive
                ]}>
                  {status.label}
                </Text>
                {index <= orderStatus && (
                  <Text style={styles.statusTime}>{status.time}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.orderSummary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          {orderItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQuantity}>×{item.quantity}</Text>
              <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFF',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  orderNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  estimatedTime: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statusContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    position: 'relative',
  },
  statusLine: {
    position: 'absolute',
    left: 15,
    top: 30,
    width: 2,
    height: 50,
    backgroundColor: '#E0E0E0',
  },
  lineActive: {
    backgroundColor: '#FF6B35',
  },
  statusCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    zIndex: 1,
  },
  statusCircleActive: {
    backgroundColor: '#FF6B35',
  },
  statusContent: {
    flex: 1,
    paddingTop: 3,
  },
  statusLabel: {
    fontSize: 16,
    color: '#999',
  },
  statusLabelActive: {
    color: '#333',
    fontWeight: '500',
  },
  statusTime: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  orderSummary: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    marginTop: 8,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  homeButton: {
    backgroundColor: '#FF6B35',
    marginHorizontal: 16,
    marginVertical: 20,
    padding: 16,
    borderRadius: 12,
  },
  homeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderTrackingScreen;
