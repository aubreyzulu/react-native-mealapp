import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { CategoriesScreenProps } from '../navigation/types';

function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  function handleMealPress(id: string) {
    // @ts-ignore
    navigation.navigate('MealOverview', { categoryId: id });
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTile
          onPress={() => handleMealPress(item.id)}
          color={item.color}
          title={item.title}
        />
      )}
    />
  );
}

export default CategoriesScreen;
