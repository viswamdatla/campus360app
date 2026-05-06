import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { CampusColors, CampusFonts } from '@/constants/theme';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

const TAB_ICONS: Record<string, IconName> = {
  index: 'dashboard',
  schedule: 'calendar-today',
  attendance: 'fact-check',
  grades: 'grade',
  profile: 'person',
};

export default function StudentTabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: CampusColors.onPrimaryContainer,
        tabBarInactiveTintColor: CampusColors.outline,
        tabBarStyle: {
          backgroundColor: CampusColors.surfaceContainerLowest,
          borderTopColor: CampusColors.outlineVariant,
          height: Platform.OS === 'ios' ? 88 : 72,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingHorizontal: 6,
        },
        tabBarLabelStyle: { fontFamily: CampusFonts.bodySemiBold, fontSize: 11 },
        tabBarItemStyle: { borderRadius: 14 },
        tabBarButton: (props) => {
          const { onPress, onPressIn, accessibilityState, children } = props;
          const selected = accessibilityState?.selected;
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={accessibilityState}
              onPress={onPress}
              onPressIn={(e) => {
                if (Platform.OS === 'ios') {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                onPressIn?.(e);
              }}
              style={({ pressed }) => [
                styles.tabBtn,
                {
                  backgroundColor: selected ? CampusColors.primaryContainer : 'transparent',
                  opacity: pressed ? 0.9 : 1,
                },
              ]}>
              {children}
            </Pressable>
          );
        },
        tabBarIcon: ({ color }) => {
          const name = TAB_ICONS[route.name] ?? 'circle';
          return <MaterialIcons name={name} size={22} color={color} />;
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Schedule',
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
        }}
      />
      <Tabs.Screen
        name="grades"
        options={{
          title: 'Grades',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    marginHorizontal: 2,
    borderRadius: 14,
    minHeight: 48,
  },
});
