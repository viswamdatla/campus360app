import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CampusColors, CampusFonts, ParentSpace, ParentType } from '@/constants/theme';

const cardShadowHeader = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.06,
  shadowRadius: 4,
  elevation: 2,
};

const DEFAULT_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3V2maNodChFdxplbO1NUWjlhitQ4C-dfZQR4njsccbcc_YygBwjT5vjyc8BEAy3sEwzODtKhLscUa-YoBzovxK6_OBNJAb6xU5Bq4P8VmfRDaa-fw43kNG6T9lG4SseGEcSEnynZkeWIjewRkY2aEi5VA4V4lrctMvCWmr5BNmrbG_JM77kXbFKYAMxFAOad4wqDiftibT3ZTGwtBdz9opfmicbXvEfyTByFBvK9IGDuX6PstPrtIbzUJbHSFOZOE06-i1EzVCp8';

type AppHeaderProps = {
  avatarUri?: string;
  onPressNotifications?: () => void;
};

export function AppHeader({ avatarUri = DEFAULT_AVATAR, onPressNotifications }: AppHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: Math.max(insets.top, 8) }]}>
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.avatarRing}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} contentFit="cover" />
          </View>
          <Text style={styles.title}>Campus Parent</Text>
        </View>
        <Pressable
          onPress={onPressNotifications}
          style={({ pressed }) => [styles.notifBtn, pressed && { opacity: 0.7 }]}
          hitSlop={12}>
          <MaterialIcons name="notifications-none" size={24} color={CampusColors.primary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: CampusColors.surface,
    paddingHorizontal: ParentSpace.md,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: CampusColors.outlineVariant,
    ...cardShadowHeader,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 48,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatarRing: {
    width: 34,
    height: 34,
    borderRadius: 17,
    overflow: 'hidden',
    backgroundColor: CampusColors.primaryFixed,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  title: {
    ...ParentType.h2,
    color: CampusColors.primary,
    fontFamily: CampusFonts.headingBold,
  },
  notifBtn: {
    padding: 8,
    borderRadius: 999,
  },
});
