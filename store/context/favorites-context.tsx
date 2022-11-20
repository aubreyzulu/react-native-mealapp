import { createContext, ReactNode, useContext, useState } from 'react';
import { IMeal } from '../../data/dummy-data';

type State = {
  favorites: Array<string>;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
};

export const FavoritesContext = createContext<{ state: State } | undefined>(
  undefined
);

type FavoriteContextProviderProps = {
  children: ReactNode;
};

export function FavoritesContextProvider({
  children,
}: FavoriteContextProviderProps) {
  const [favorites, setFavoriteMeal] = useState<Array<string>>([]);

  function addToFavorites(id: string) {
    setFavoriteMeal((prev) => [...prev, id]);
  }

  function removeFromFavorites(id: string) {
    setFavoriteMeal((prevMeal) => prevMeal.filter((mealId) => mealId !== id));
  }
  const value = {
    state: { favorites, addToFavorites, removeFromFavorites },
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error(
      'useFavorites must be used within a  FavoriteContextProvider'
    );
  }
  return context;
}
