import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import List from '../components/List';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/SubTitle';
import { MEALS } from '../data/dummy-data';
import { MealDetailScreenProps } from '../navigation/types';
import { AppDispatch, RootState } from '../store/redux/store';
import { addToFavorite, removeFromFavorite } from '../store/redux/favorites';

function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const { mealId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { favorites } = useSelector((state: RootState) => state.favorites);

  const isMealFavorite = favorites.includes(mealId);

  const meal = MEALS.find((meal) => meal.id === mealId);

  function handleMealFavorite() {
    if (isMealFavorite) {
      dispatch(removeFromFavorite(mealId));
    } else {
      dispatch(addToFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color="white"
          icon={isMealFavorite ? 'star' : 'star-outline'}
          onPressed={handleMealFavorite}
        />
      ),
    });
  }, [navigation, handleMealFavorite]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: meal!.imageUrl }} />
      <Text style={styles.title}>{meal!.title}</Text>
      <MealDetails
        duration={meal!.duration}
        affordability={meal!.affordability}
        complexity={meal!.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={meal!.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={meal!.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: { width: '100%', height: 350 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export default MealDetailScreen;
