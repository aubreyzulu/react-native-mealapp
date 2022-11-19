import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { IMeal } from '../data/dummy-data';
import MealDetails from './MealDetails';

interface MealItemProps {
  meal: IMeal;
}

function MealItem({
  meal: { title, imageUrl, duration, complexity, affordability, id },
}: MealItemProps) {
  const navigation = useNavigation();
  function handleMealDetail() {
    navigation.navigate('MealDetail', { mealId: id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handleMealDetail}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContariner}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContariner: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  // details: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 8,
  // },
  // detailItem: {
  //   marginHorizontal: 4,
  //   fontSize: 12,
  // },
});

export default MealItem;
