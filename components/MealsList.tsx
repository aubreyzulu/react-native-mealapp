import { StyleSheet, View, FlatList } from 'react-native';
import { IMeal } from '../data/dummy-data';
import MealItem from './MealItem';

interface MealsListProps {
  data: Array<IMeal>;
}

function MealsList({ data }: MealsListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
export default MealsList;
