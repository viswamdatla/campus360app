import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { CampusColors, CampusFonts } from '@/constants/theme';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

const TAB_ICONS: Record<string, IconName> = {
  index: 'dashboard',
  schedule: 'calendar-today',
  attendance: 'event-available',
  grades: 'grade',
  fees: 'payment',
};

export default function TabLayout() {
  const headerShown = useClientOnlyValue(false, false);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown,
        tabBarActiveTintColor: CampusColors.onPrimary,
        tabBarInactiveTintColor: CampusColors.outline,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: CampusFonts.bodySemiBold,
          marginTop: 2,
        },
        tabBarStyle: {
          backgroundColor: CampusColors.surfaceContainer,
          borderTopColor: CampusColors.outlineVariant,
          height: Platform.OS === 'ios' ? 88 : 72,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 28 : 12,
          paddingHorizontal: 4,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          ...styles.tabBarShadow,
        },
        tabBarItemStyle: {
          borderRadius: 12,
        },
        tabBarButton: (props) => {
          const { onPress, accessibilityState, children } = props;
          const selected = accessibilityState?.selected;
          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={accessibilityState}
              onPress={onPress}
              style={({ pressed }) => [
                styles.tabBtn,
                {
                  backgroundColor: selected ? CampusColors.primary : 'transparent',
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
      <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="schedule" options={{ title: 'Schedule' }} />
      <Tabs.Screen name="attendance" options={{ title: 'Attendance' }} />
      <Tabs.Screen name="grades" options={{ title: 'Grades' }} />
      <Tabs.Screen name="fees" options={{ title: 'Fees' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 12,
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    marginHorizontal: 2,
    borderRadius: 12,
    minHeight: 48,
  },
});
