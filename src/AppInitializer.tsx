// src/AppInitializer.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from './itemslice';
import { itemsData } from './data';

const AppInitializer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(itemsData));
  }, [dispatch]);

  return null; 
};

export default AppInitializer;
