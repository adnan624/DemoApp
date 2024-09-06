import React, { useState, useCallback } from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity, StyleSheet, Alert, TextInput, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './itemslice';
import { addItem } from './cartslice';
import { RootState, AppDispatch } from './store';
import { Item } from './types';

const ITEMS_PER_PAGE = 10;

const ListingPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.items.items) as Item[];
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedItems = filteredItems.slice(0, currentPage * ITEMS_PER_PAGE);

  const loadMoreItems = useCallback(() => {
    if (isLoading || paginatedItems.length >= filteredItems.length) return;
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(prevPage => prevPage + 1);
      setIsLoading(false);
    }, 1000); 
  }, [isLoading, paginatedItems.length, filteredItems.length]);

  const handleQuantityChange = (id: number, delta: number) => {
    if (delta > 0) {
      dispatch(incrementQuantity(id));
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  const handleAddToCart = () => {
    const itemsToAdd = items.filter(item => item.quantity && item.quantity > 0);
    if (itemsToAdd.length === 0) {
      Alert.alert(
        'No Items Added',
        'Please select items with a quantity greater than 0 before adding to the cart.',
        [{ text: 'OK' }]
      );
    } else {
      itemsToAdd.forEach(item => dispatch(addItem({ ...item, quantity: item.quantity || 1 })));
      // navigation.navigate('CartScreen', { cartItems: itemsToAdd });
    }
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text>Price: ${item.price}</Text>
      <View style={styles.actions}>
        <Button title="-" onPress={() => handleQuantityChange(item.id, -1)} />
        <Text style={styles.quantity}>{item.quantity || 0}</Text>
        <Button title="+" onPress={() => handleQuantityChange(item.id, 1)} />
      </View>
    </View>
  );

  const renderFooter = () => {
    return (
      isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : null
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search items by name..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <FlatList
        data={paginatedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <View style={{ backgroundColor: '#8fbc8f', borderRadius: 10, marginTop: 10 }}>
        <Button title="Add to Cart" onPress={handleAddToCart} color={'#008000'} />
      </View>
      <View style={{ backgroundColor: '#cd5c5c', borderRadius: 10, marginTop: 10 }}>
        <Button title="Cart Screen" onPress={() => navigation.navigate('CartScreen')} color={'#8b0000'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10
  },
  list: {
    flexGrow: 1,
    marginBottom: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 175,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  loaderContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default ListingPage;
