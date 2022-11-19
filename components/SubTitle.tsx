import { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle, View, Text } from 'react-native';

interface SubTitleProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function SubTitle({ children }: SubTitleProps) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    margin: 4,
    padding: 6,
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
  },
});

export default SubTitle;
