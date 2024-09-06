import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Item ={
  id: number;
  name: string;
  price: number;
  quantity?: number;
  uri?: string;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity = (item.quantity || 0) + 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity) item.quantity = Math.max(0, item.quantity - 1);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { setItems, incrementQuantity, decrementQuantity, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
