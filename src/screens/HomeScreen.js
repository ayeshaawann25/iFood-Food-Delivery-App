import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { restaurants, categories } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(text.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <View style={styles.categoryIcon}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Food Lover! 👋</Text>
          <Text style={styles.subGreeting}>Find your favorite food</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Icon name="person-circle" size={40} color="#FF6B35" />
        </TouchableOpacity>
      </View>

      <SearchBar 
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search restaurants or cuisine..."
      />

      <View style={styles.locationContainer}>
        <Icon name="location" size={20} color="#FF6B35" />
        <Text style={styles.locationText}>Delivering to: Home</Text>
        <Icon name="chevron-down" size={20} color="#666" />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
      />

      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>🔥 Get 20% off on first order</Text>
        <Text style={styles.promoCode}>Use Code: IFOOD20</Text>
      </View>

      <Text style={styles.sectionTitle}>Top Restaurants</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => (
          <RestaurantCard 
            restaurant={item}
            onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  profileButton: {
    padding: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  categoriesList: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryEmoji: {
    fontSize: 30,
  },
  categoryName: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  promoBanner: {
    backgroundColor: '#FF6B35',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  promoCode: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
    opacity: 0.9,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default HomeScreen;
