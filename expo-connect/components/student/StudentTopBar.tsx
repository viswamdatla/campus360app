import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CampusColors, CampusFonts, CampusSpace } from '@/constants/theme';

type StudentTopBarProps = {
  title?: string;
  avatarUri: string;
  onPressNotifications?: () => void;
};

export function StudentTopBar({ title = 'CampusConnect', avatarUri, onPressNotifications }: StudentTopBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: Math.max(insets.top, 10) }]}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} contentFit="cover" />
          <Text style={styles.brand}>{title}</Text>
        </View>

        <Pressable
          onPress={onPressNotifications}
          hitSlop={12}
          style={({ pressed }) => [styles.iconBtn, pressed && { opacity: 0.7 }]}>
          <MaterialIcons name="notifications-none" size={24} color={CampusColors.primary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    paddingHorizontal: CampusSpace.lg,
    paddingBottom: CampusSpace.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: CampusColors.outlineVariant,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  avatar: { width: 40, height: 40, borderRadius: 999, backgroundColor: CampusColors.surfaceContainer },
  brand: { fontSize: 20, lineHeight: 28, fontFamily: CampusFonts.headingBold, color: CampusColors.primary },
  iconBtn: { width: 40, height: 40, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
});

