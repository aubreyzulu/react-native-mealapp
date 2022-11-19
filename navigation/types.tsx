import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Drawer: undefined;
  MealOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type CategoriesScreenProps = DrawerScreenProps<
  RootDrawerParamList,
  'Categories'
>;

export type MealDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealDetail'
>;

export type MealOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MealOverview'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
