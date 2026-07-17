import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartItem from '../components/CartItem';

const CartScreen = ({ route, navigation }) => {
  const { cartItems: initialCart, restaurant } = route.params || { 
    cartItems: [], 
    restaurant: null 
  };
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    Alert.alert(
      'Confirm Order',
      `Total: $${total.toFixed(2)}\n\nProceed to checkout?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Place Order', 
          onPress: () => {
            navigation.navigate('OrderTracking', { 
              orderItems: cartItems,
              total: total
            });
          }
        }
      ]
    );
  };

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Icon name="cart-outline" size={80} color="#CCC" />
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <TouchableOpacity 
          style={styles.browseButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.browseButtonText}>Browse Restaurants</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        {restaurant && (
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
        )}
      </View>

      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem 
            item={item} 
            onUpdateQuantity={updateQuantity}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cartList}
      />

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax</Text>
          <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 20,
  },
  browseButton: {
    marginTop: 20,
    backgroundColor: '#FF6B35',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  browseButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantName: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cartList: {
    padding: 16,
  },
  summary: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#333',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 12,
    marginTop: 6,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  checkoutButton: {
    backgroundColor: '#FF6B35',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartScreen;
