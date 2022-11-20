import { useLayoutEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealOverviewScreenProps } from '../navigation/types';

function MealOverviewScreen({ route, navigation }: MealOverviewScreenProps) {
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId]);

  return <MealsList data={filteredMeals} />;
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });
export default MealOverviewScreen;
