import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';
import { RootState } from '../store/redux/store';

function FavoritesScreen() {
  const { favorites } = useSelector((state: RootState) => state.favorites);

  const favoriteMeals = MEALS.filter((meal) => favorites.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorites meals yet</Text>
      </View>
    );
  }
  return <MealsList data={favoriteMeals} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default FavoritesScreen;
