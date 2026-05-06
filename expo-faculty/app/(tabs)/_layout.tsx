import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { BrandColors } from '@/constants/theme';

function TabIcon({ name, color }: Readonly<{ name: keyof typeof MaterialIcons.glyphMap; color: string }>) {
  return <MaterialIcons name={name} size={26} color={color} />;
}

const dashboardOptions = {
  title: 'Dashboard',
  tabBarIcon: ({ color }: { color: string }) => <TabIcon name="dashboard" color={color} />,
};
const classesOptions = {
  title: 'Classes',
  tabBarIcon: ({ color }: { color: string }) => <TabIcon name="school" color={color} />,
};
const attendanceOptions = {
  title: 'Attendance',
  tabBarIcon: ({ color }: { color: string }) => <TabIcon name="fact-check" color={color} />,
};
const gradingOptions = {
  title: 'Grading',
  tabBarIcon: ({ color }: { color: string }) => <TabIcon name="grade" color={color} />,
};
const settingsOptions = {
  title: 'Settings',
  tabBarIcon: ({ color }: { color: string }) => <TabIcon name="settings" color={color} />,
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: BrandColors.primary,
        tabBarInactiveTintColor: BrandColors.onSurfaceVariant,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: BrandColors.surfaceContainer,
          borderTopColor: BrandColors.outlineVariant,
          height: 72,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Inter_600SemiBold',
        },
      }}>
      <Tabs.Screen name="index" options={dashboardOptions} />
      <Tabs.Screen name="classes" options={classesOptions} />
      <Tabs.Screen name="attendance" options={attendanceOptions} />
      <Tabs.Screen name="grading" options={gradingOptions} />
      <Tabs.Screen name="settings" options={settingsOptions} />
    </Tabs>
  );
}
