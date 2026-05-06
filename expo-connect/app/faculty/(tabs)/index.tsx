import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { BrandColors, Radius, Spacing, Typography } from '@/constants/theme';

const schedule = [
  {
    label: 'Active Now',
    tone: 'primary',
    title: 'Advanced Macroeconomics',
    time: '09:00 AM - 10:30 AM',
    place: 'Building B, Room 302',
  },
  {
    label: 'Upcoming',
    tone: 'secondary',
    title: 'Intro to Financial Systems',
    time: '01:00 PM - 02:30 PM',
    place: 'Lecture Hall A-1',
  },
];

const notifications = [
  {
    tone: 'danger',
    title: 'Grade Deadline Approaching',
    text: 'Midterm results for Eco 101 are due in 48 hours.',
    when: '2 HOURS AGO',
    icon: 'priority-high',
  },
  {
    tone: 'tertiary',
    title: 'New Message',
    text: 'John Doe sent a query regarding "Macro Assignment 2".',
    when: '5 HOURS AGO',
    icon: 'chat-bubble',
  },
  {
    tone: 'primary',
    title: 'Class Canceled',
    text: 'Seminar Room B-12 is under maintenance for Friday.',
    when: 'YESTERDAY',
    icon: 'task-alt',
  },
];

function notifToneStyle(tone: 'danger' | 'tertiary' | 'primary') {
  if (tone === 'danger') return { bg: styles.iconDanger, fg: BrandColors.onErrorContainer };
  if (tone === 'tertiary') return { bg: styles.iconTertiary, fg: BrandColors.onTertiaryFixedVariant };
  return { bg: styles.iconPrimary, fg: BrandColors.onPrimaryFixedVariant };
}

function NotificationRow({
  n,
  showDivider,
}: Readonly<{
  n: (typeof notifications)[number];
  showDivider: boolean;
}>) {
  const t = notifToneStyle(n.tone as any);

  return (
    <View style={[styles.notifRow, showDivider ? styles.notifDivider : null]}>
      <View style={[styles.notifIcon, t.bg]}>
        <MaterialIcons name={n.icon as any} size={20} color={t.fg} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.notifTitle}>{n.title}</Text>
        <Text style={styles.notifText}>{n.text}</Text>
        <Text style={styles.notifWhen}>{n.when}</Text>
      </View>
    </View>
  );
}

export default function DashboardScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.topbar}>
        <View style={styles.topLeft}>
          <MaterialIcons name="school" size={26} color={BrandColors.primary} />
          <Text style={styles.topTitle}>Faculty Portal</Text>
        </View>

        <View style={styles.topRight}>
          <TouchableOpacity style={styles.iconBtn} accessibilityRole="button">
            <MaterialIcons name="notifications" size={24} color={BrandColors.onSurfaceVariant} />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1w_ETbYIjmrYzDePnsxLkK59ZdRtL-OyLAJgat-KUZiwpcT3PoFpdqs0u6mPrTicvyS0zSyjruZJxTyUEozyjjs0H3nVMoXqkdKtV4EZWwa-mwFOmIXEWw8ssq0MVNmhWnpWPyDhgoaZ4OSNWkCFgao_CG_InVhiZj0_w9LFXnAYhzCfPq_WU0CYPng7XNmtqnvJqn0aZCvlrn4hyeS8mKhIeyfq6heIWsXWoCfTQG14V4VDzzaJFNkeaZddg4gS0sF-ZQq4vOA',
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.h1}>Welcome back, Dr. Academic</Text>
          <Text style={styles.heroSub}>
            You have 3 classes today and 12 pending assignments to grade.
          </Text>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.h2}>Today&apos;s Schedule</Text>
          <TouchableOpacity accessibilityRole="button">
            <Text style={styles.link}>View Calendar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardGrid}>
          {schedule.map((c) => (
            <View key={c.title} style={[styles.classCard, c.tone === 'primary' ? styles.leftPrimary : styles.leftSecondary]}>
              <View style={styles.cardTop}>
                <View style={[styles.pill, c.tone === 'primary' ? styles.pillPrimary : styles.pillSecondary]}>
                  <Text style={[styles.pillText, c.tone === 'primary' ? styles.pillTextPrimary : styles.pillTextSecondary]}>
                    {c.label}
                  </Text>
                </View>
                <MaterialIcons name="more-vert" size={20} color={BrandColors.outline} />
              </View>
              <Text style={styles.cardTitle}>{c.title}</Text>
              <View style={styles.metaRow}>
                <MaterialIcons name="schedule" size={18} color={BrandColors.onSurfaceVariant} />
                <Text style={styles.metaText}>{c.time}</Text>
              </View>
              <View style={styles.metaRow}>
                <MaterialIcons name="location-on" size={18} color={BrandColors.onSurfaceVariant} />
                <Text style={styles.metaText}>{c.place}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.attnBanner}>
          <View style={styles.attnLeft}>
            <Text style={styles.bannerTitle}>Attendance Overview</Text>
            <Text style={styles.bannerText}>
              Current average attendance across all Fall 2024 sessions is 94.2%. Keep up the engagement!
            </Text>
            <TouchableOpacity style={styles.bannerBtn} accessibilityRole="button">
              <Text style={styles.bannerBtnText}>Details Report</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.attnStat}>
            <Text style={styles.attnPct}>94%</Text>
            <Text style={styles.attnLabel}>ATTENDANCE RATE</Text>
          </View>
        </View>

        <Text style={[styles.h2, { marginTop: Spacing.xl }]}>Quick Actions</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionPrimary} accessibilityRole="button">
            <MaterialIcons name="fact-check" size={22} color={BrandColors.onPrimary} />
            <Text style={styles.actionPrimaryText}>Mark Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionOutlined} accessibilityRole="button">
            <MaterialIcons name="post-add" size={22} color={BrandColors.primary} />
            <Text style={styles.actionOutlinedText}>Post Grades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionNeutral} accessibilityRole="button">
            <MaterialIcons name="mail" size={22} color={BrandColors.onSurfaceVariant} />
            <Text style={styles.actionNeutralText}>Message Students</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notifCard}>
          <Text style={styles.h2}>Recent Notifications</Text>
          <View style={{ height: Spacing.md }} />
          {notifications.map((n, idx) => (
            <NotificationRow key={n.title} n={n} showDivider={idx > 0} />
          ))}

          <TouchableOpacity accessibilityRole="button" style={{ marginTop: Spacing.lg }}>
            <Text style={[styles.link, { textAlign: 'center' }]}>View All Notifications</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} accessibilityRole="button" accessibilityLabel="Add">
        <MaterialIcons name="add" size={28} color={BrandColors.onPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BrandColors.surface,
  },
  topbar: {
    height: 64,
    paddingHorizontal: Spacing.container,
    backgroundColor: BrandColors.surfaceContainer,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BrandColors.outlineVariant,
  },
  topLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  topTitle: { ...Typography.h1, color: BrandColors.primary },
  topRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: Radius.full,
    borderWidth: 2,
    borderColor: BrandColors.primaryContainer,
  },
  content: {
    padding: Spacing.container,
    paddingBottom: 120,
  },
  hero: { marginBottom: Spacing.xl },
  h1: { ...Typography.h1, color: BrandColors.onSurface },
  heroSub: { ...Typography.bodyLg, color: BrandColors.onSurfaceVariant, marginTop: 6 },
  h2: { ...Typography.h2, color: BrandColors.onSurface },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  link: { ...Typography.labelSm, color: BrandColors.primary },
  cardGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md },
  classCard: {
    width: '100%',
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    borderWidth: 1,
    borderColor: 'rgba(193,198,213,0.3)',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  leftPrimary: { borderLeftWidth: 4, borderLeftColor: BrandColors.primary },
  leftSecondary: { borderLeftWidth: 4, borderLeftColor: BrandColors.secondary },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: Spacing.md },
  pill: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  pillPrimary: { backgroundColor: BrandColors.primaryFixed },
  pillSecondary: { backgroundColor: BrandColors.secondaryContainer },
  pillText: { ...Typography.labelSm },
  pillTextPrimary: { color: BrandColors.onPrimaryFixedVariant },
  pillTextSecondary: { color: BrandColors.onSecondaryFixedVariant },
  cardTitle: { ...Typography.h2, color: BrandColors.onSurface, marginBottom: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  metaText: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant },
  attnBanner: {
    marginTop: Spacing.lg,
    backgroundColor: BrandColors.primary,
    borderRadius: 24,
    padding: Spacing.xl,
    flexDirection: 'row',
    gap: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  attnLeft: { flex: 1 },
  bannerTitle: { ...Typography.h2, color: BrandColors.onPrimary, marginBottom: 6 },
  bannerText: { ...Typography.bodyMd, color: 'rgba(255,255,255,0.9)', marginBottom: Spacing.md },
  bannerBtn: {
    alignSelf: 'flex-start',
    backgroundColor: BrandColors.onPrimary,
    paddingHorizontal: Spacing.xl,
    paddingVertical: 12,
    borderRadius: Radius.full,
  },
  bannerBtnText: { ...Typography.labelSm, color: BrandColors.primary },
  attnStat: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: Radius.md,
    padding: Spacing.xl,
    alignItems: 'center',
  },
  attnPct: { fontSize: 48, color: BrandColors.onPrimary, fontFamily: 'WorkSans_800ExtraBold' },
  attnLabel: { ...Typography.labelSm, color: BrandColors.onPrimary, opacity: 0.95, letterSpacing: 1 },
  actions: { gap: Spacing.sm, marginTop: Spacing.md },
  actionPrimary: {
    backgroundColor: BrandColors.primary,
    borderRadius: Radius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  actionPrimaryText: { ...Typography.bodyLg, color: BrandColors.onPrimary },
  actionOutlined: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(0,78,159,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  actionOutlinedText: { ...Typography.bodyLg, color: BrandColors.primary },
  actionNeutral: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(193,198,213,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  actionNeutralText: { ...Typography.bodyLg, color: BrandColors.onSurfaceVariant },
  notifCard: {
    marginTop: Spacing.lg,
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: 24,
    padding: Spacing.gutter,
    borderWidth: 1,
    borderColor: 'rgba(193,198,213,0.3)',
  },
  notifRow: { flexDirection: 'row', gap: Spacing.md, alignItems: 'flex-start' },
  notifDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: 'rgba(193,198,213,0.2)', paddingTop: Spacing.md, marginTop: Spacing.md },
  notifIcon: { width: 40, height: 40, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  iconDanger: { backgroundColor: BrandColors.errorContainer },
  iconTertiary: { backgroundColor: BrandColors.tertiaryFixed },
  iconPrimary: { backgroundColor: BrandColors.primaryFixed },
  notifTitle: { ...Typography.bodyMd, color: BrandColors.onSurface, fontFamily: 'Inter_700Bold' },
  notifText: { ...Typography.caption, color: BrandColors.onSurfaceVariant, marginTop: 2 },
  notifWhen: { fontSize: 10, letterSpacing: 0.8, marginTop: 4, color: BrandColors.outline, fontFamily: 'Inter_600SemiBold' },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 90,
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: BrandColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
});
