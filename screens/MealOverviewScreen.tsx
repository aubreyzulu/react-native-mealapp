import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
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

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealOverviewScreen;
