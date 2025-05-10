import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { categoriesApi, productsApi } from '../services/api';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

interface AppContextType {
  categories: Category[];
  featuredProducts: Product[];
  isLoading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch categories
        const categoriesData = await categoriesApi.getAll();
        setCategories(categoriesData);
        
        // Fetch featured products (first page)
        const productsData = await productsApi.getAll(1, 8);
        setFeaturedProducts(productsData.products);
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching initial data:', err);
        setError('Failed to load data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const value = {
    categories,
    featuredProducts,
    isLoading,
    error
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
