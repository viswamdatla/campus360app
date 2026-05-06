import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View, Image } from 'react-native';

import { BrandColors, Radius, Spacing, Typography } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View style={styles.root}>
      <View style={styles.topbar}>
        <View style={styles.topLeft}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDACtqBQK0u-yv_5SmIIssAlNo3AUzpb8xwFQN_WvERDRyf0v_6-aOZsXTNGzxtu0K3Gre5SrdE5SfqIz6F216mmML2iauEpRf28Y7EIkOe247FmwE12WhLn15AQkbRZlAzs42y6B3JjH6gQ_QiKEGuVUwA0zKX2530i1dJjEsnSX6S0R7gQCU1CY_nQ37XzbqBthRgiwO10ZTFDiZ3Y3IR3NP1bUHsJ2Ryr71VegLB8BrfQYF7nt0rL2SU0o7qUbd0_ugSUEcSd6I',
            }}
            style={styles.avatar}
          />
          <Text style={styles.topTitle}>Faculty Portal</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn} accessibilityRole="button" accessibilityLabel="Notifications">
          <MaterialIcons name="notifications" size={24} color={BrandColors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <View style={styles.profileImgWrap}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtYtlimhYvrtd9Yq7g9jv3zbBAllfcv2LrCvJDo5WWSy0LnLvo3l8THuVN-mAnkG19H_IDp74mVlAdPBx8Tu3tcHtdhJfoFzMRwRcx2PIaL2ASVRpgtPJ2lUpLqNB5VqVBhDLUDA5pvDhIAz6kOey3g_JK40oo8t4_1xwtD940DRwmIdvyyE1yQyLsW_Qko-SIYbffcEzg3OQITt6nHna7RAp71YjzCcscyPrWs1udVVUwtLvu_-lRbn-ryWwC51eD_Q1Jvp-ErZk',
              }}
              style={styles.profileImg}
            />
            <TouchableOpacity style={styles.editBtn} accessibilityRole="button" accessibilityLabel="Edit profile">
              <MaterialIcons name="edit" size={18} color={BrandColors.onPrimary} />
            </TouchableOpacity>
          </View>

          <Text style={styles.h1}>Dr. Eleanor Vance</Text>
          <Text style={styles.sub}>Senior Professor, Department of Linguistics</Text>

          <View style={styles.profileMeta}>
            <View style={styles.metaRow}>
              <MaterialIcons name="mail" size={20} color={BrandColors.onSurfaceVariant} />
              <Text style={styles.bodyMd}>e.vance@university.edu</Text>
            </View>
            <View style={styles.metaRow}>
              <MaterialIcons name="apartment" size={20} color={BrandColors.onSurfaceVariant} />
              <Text style={styles.bodyMd}>Humanities Building, Room 402</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>Security</Text>

          <TouchableOpacity style={styles.rowBtn} accessibilityRole="button">
            <View style={styles.rowLeft}>
              <MaterialIcons name="lock" size={22} color={BrandColors.primary} />
              <Text style={styles.bodyLg}>Change Password</Text>
            </View>
            <MaterialIcons name="chevron-right" size={22} color={BrandColors.outline} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.rowBtn, { marginTop: 6 }]} accessibilityRole="button">
            <View style={styles.rowLeft}>
              <MaterialIcons name="vibration" size={22} color={BrandColors.primary} />
              <Text style={styles.bodyLg}>Two-Factor Auth</Text>
            </View>
            <View style={styles.activePill}>
              <Text style={styles.activeText}>ACTIVE</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Text style={styles.h2}>Notification Preferences</Text>
            <MaterialIcons name="notifications-active" size={22} color={BrandColors.primary} />
          </View>

          <View style={styles.prefGrid}>
            <Pref title="Grade Alerts" sub="Notify when grading period ends" defaultOn />
            <Pref title="Direct Messages" sub="Instant alerts for student inbox" defaultOn />
            <Pref title="Faculty Updates" sub="Administrative announcements" />
            <Pref title="Schedule Changes" sub="Room or timing adjustments" defaultOn />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.h2}>App Preferences</Text>

          <RowSelect icon="dark-mode" title="Dark Mode" value="Follow System" />
          <RowSelect icon="translate" title="Language" value="English (US)" />
          <RowSelect icon="history" title="Auto-Archive Courses" value="Every Semester" isLast />
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.saveBtn} accessibilityRole="button">
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn} accessibilityRole="button">
            <Text style={styles.resetText}>Reset to Default</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signOutBtn}
          accessibilityRole="button"
          onPress={async () => {
            await signOut();
            router.replace('/');
          }}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

function Pref({ title, sub, defaultOn = false }: Readonly<{ title: string; sub: string; defaultOn?: boolean }>) {
  const [value, setValue] = React.useState(defaultOn);
  return (
    <View style={styles.prefCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.bodyLg}>{title}</Text>
        <Text style={styles.caption}>{sub}</Text>
      </View>
      <Switch value={value} onValueChange={setValue} trackColor={{ false: BrandColors.surfaceContainerHighest, true: BrandColors.primary }} />
    </View>
  );
}

function RowSelect({
  icon,
  title,
  value,
  isLast,
}: Readonly<{
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  value: string;
  isLast?: boolean;
}>) {
  return (
    <View style={[styles.selectRow, isLast ? null : styles.selectDivider]}>
      <View style={styles.rowLeft}>
        <MaterialIcons name={icon} size={22} color={BrandColors.primary} />
        <Text style={styles.bodyLg}>{title}</Text>
      </View>
      <View style={styles.selectPill}>
        <Text style={styles.selectText}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BrandColors.surface },
  topbar: {
    height: 64,
    paddingHorizontal: Spacing.container,
    backgroundColor: BrandColors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BrandColors.outlineVariant,
  },
  topLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  topTitle: { ...Typography.h2, color: BrandColors.primary },
  iconBtn: { width: 40, height: 40, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 40, height: 40, borderRadius: Radius.full, borderWidth: 1, borderColor: BrandColors.outlineVariant },
  content: { padding: Spacing.container, paddingBottom: 120, gap: Spacing.gutter },
  profileCard: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  profileImgWrap: { position: 'relative', marginBottom: Spacing.md },
  profileImg: { width: 128, height: 128, borderRadius: Radius.full, borderWidth: 4, borderColor: BrandColors.surfaceContainer },
  editBtn: { position: 'absolute', right: 0, bottom: 0, backgroundColor: BrandColors.primary, borderRadius: Radius.full, padding: 10 },
  h1: { ...Typography.h1, color: BrandColors.onSurface },
  h2: { ...Typography.h2, color: BrandColors.onSurface, marginBottom: Spacing.md },
  sub: { ...Typography.bodyLg, color: BrandColors.onSurfaceVariant, textAlign: 'center', marginTop: 4 },
  bodyLg: { ...Typography.bodyLg, color: BrandColors.onSurface },
  bodyMd: { ...Typography.bodyMd, color: BrandColors.onSurface },
  caption: { ...Typography.caption, color: BrandColors.onSurfaceVariant, marginTop: 2 },
  profileMeta: { width: '100%', marginTop: Spacing.lg, paddingTop: Spacing.lg, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: BrandColors.outlineVariant, gap: Spacing.md },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  card: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.lg,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  rowBtn: { paddingVertical: Spacing.md, paddingHorizontal: Spacing.md, borderRadius: Radius.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  activePill: { backgroundColor: BrandColors.primaryFixed, paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  activeText: { fontSize: 10, letterSpacing: 1, fontFamily: 'Inter_700Bold', color: BrandColors.onPrimaryFixedVariant },
  cardHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.lg },
  prefGrid: { gap: Spacing.md },
  prefCard: { borderWidth: 1, borderColor: BrandColors.outlineVariant, borderRadius: Radius.md, padding: Spacing.md, flexDirection: 'row', alignItems: 'flex-start', gap: Spacing.md },
  selectRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: Spacing.md },
  selectDivider: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: BrandColors.outlineVariant },
  selectPill: { backgroundColor: BrandColors.surfaceContainerHigh, paddingHorizontal: Spacing.md, paddingVertical: 8, borderRadius: 12 },
  selectText: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant },
  actionRow: { flexDirection: 'row', gap: Spacing.md },
  saveBtn: { flex: 1, backgroundColor: BrandColors.primary, borderRadius: Radius.md, paddingVertical: 14, alignItems: 'center' },
  saveText: { ...Typography.bodyLg, color: BrandColors.onPrimary, fontFamily: 'Inter_600SemiBold' },
  resetBtn: { flex: 1, borderWidth: 1, borderColor: BrandColors.outline, borderRadius: Radius.md, paddingVertical: 14, alignItems: 'center' },
  resetText: { ...Typography.bodyLg, color: BrandColors.secondary, fontFamily: 'Inter_600SemiBold' },
  signOutBtn: {
    marginTop: Spacing.lg,
    borderWidth: 1,
    borderColor: BrandColors.error,
    borderRadius: Radius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  signOutText: { ...Typography.bodyLg, color: BrandColors.error, fontFamily: 'Inter_600SemiBold' },
});

