import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FoodItem from '../components/FoodItem';

const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    Alert.alert('Added to Cart', `${item.name} added to your cart!`);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: restaurant.image }} style={styles.coverImage} />
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.ratingRow}>
            <Icon name="star" size={18} color="#FFD700" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.distance}>{restaurant.distance}</Text>
            <Text style={styles.priceRange}>{restaurant.priceRange}</Text>
          </View>
          <Text style={styles.cuisine}>{restaurant.cuisine} • {restaurant.deliveryTime}</Text>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Menu</Text>
          {restaurant.menu.map(item => (
            <FoodItem
              key={item.id}
              item={item}
              onAddToCart={addToCart}
            />
          ))}
        </View>
        <View style={{ height: 80 }} />
      </ScrollView>

      {cartItems.length > 0 && (
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart', { cartItems, restaurant })}
        >
          <View style={styles.cartContent}>
            <Icon name="cart" size={24} color="#FFF" />
            <Text style={styles.cartText}>View Cart ({totalItems} items)</Text>
            <Text style={styles.cartTotal}>
              ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 25,
    padding: 10,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
    marginRight: 15,
  },
  distance: {
    fontSize: 14,
    color: '#666',
    marginRight: 15,
  },
  priceRange: {
    fontSize: 14,
    color: '#666',
  },
  cuisine: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  menuSection: {
    padding: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#FF6B35',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  cartTotal: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RestaurantDetailScreen;
