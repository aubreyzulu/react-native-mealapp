import { OpaqueColorValue, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ReactNode } from 'react';

interface IconButtonProps {
  onPressed: () => void;
  icon: any;
  color: string | OpaqueColorValue;
}

function IconButton({ onPressed, icon, color }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPressed}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});

export default IconButton;
