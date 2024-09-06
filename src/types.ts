 export type RootStackParamList = {
    ListingPage: undefined;
    CartScreen: { cartItems: Array<{ id: string; name: string; price: number; quantity: number }> };
  };
  
  export interface Item {
    id: any;
    name: string;
    price: number;
    quantity: number;
    uri: string;
    
  }
  