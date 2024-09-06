import React, { useEffect, useCallback, memo } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { addItem, removeItem, clearCart, updateQuantity } from './cartslice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';

type CartScreenRouteProp = RouteProp<RootStackParamList, 'CartScreen'>;
type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;

type Props = {
  route: CartScreenRouteProp;
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<Props> = ({ route, navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { cartItems: routeCartItems = [] } = route.params || {};

  useEffect(() => {
    routeCartItems.forEach(item => {
      const itemExists = cartItems.some(cartItem => cartItem.id === item.id);
      if (!itemExists) {
        dispatch(addItem(item));
      }
    });
  }, [routeCartItems, dispatch]); 

  const aggregatedCartItems = cartItems.reduce((acc: any[], item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const totalPrice = aggregatedCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.log('totalPrice---',totalPrice)

  const handleCheckout = useCallback(() => {
    console.log('Proceed to checkout with items:', aggregatedCartItems);
  }, [aggregatedCartItems]);

  const handleRemove = useCallback((id: string) => {
    dispatch(removeItem(id));
  }, [dispatch]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const handleQuantityChange = useCallback((id: string, change: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        dispatch(removeItem(id));
      } else {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  }, [dispatch, cartItems]);

  const CartItem = memo(({ item }: { item: { uri: string | undefined; id: string; name: string; price: number; quantity: number } }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  ));

  const renderItem = ({ item }: { item: { uri: string | undefined; id: string; name: string; price: number; quantity: number } }) => (
    <CartItem item={item} />
  );

  return (
    <View style={styles.container}>
      {aggregatedCartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={aggregatedCartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
            getItemLayout={(data, index) => (
              { length: 120, offset: 120 * index, index } 
            )}
          />
          <View style={{alignSelf:'center', flexDirection:'row', marginVertical: 10}}>
          <Text>Total Price - </Text>
          <Text style={{fontWeight:'bold'}}>{totalPrice}</Text>
          </View>
         
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClearCart} style={styles.clearButton}>
              <Text style={styles.buttonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  list: {
    flexGrow: 1,
    marginBottom: 20,
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemDetails: {
    padding: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantity: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    padding: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  removeButton: {
    marginTop: 10,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: '#DC3545',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CartScreen;
