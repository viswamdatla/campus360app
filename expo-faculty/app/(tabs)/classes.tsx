import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { BrandColors, Radius, Spacing, Typography } from '@/constants/theme';

export default function ClassesScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.topbar}>
        <View style={styles.topLeft}>
          <Text style={styles.topTitle}>Faculty Portal</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn} accessibilityRole="button" accessibilityLabel="Notifications">
          <MaterialIcons name="notifications" size={24} color={BrandColors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.h1}>Active Courses</Text>
          <Text style={styles.sub}>Spring Semester 2024</Text>
        </View>

        <View style={styles.filters}>
          <View style={styles.filter}>
            <Text style={styles.filterLabel}>Semester</Text>
            <View style={styles.select}>
              <Text style={styles.selectText}>Spring 2024</Text>
              <MaterialIcons name="expand-more" size={22} color={BrandColors.onSurfaceVariant} />
            </View>
          </View>
          <View style={styles.filter}>
            <Text style={styles.filterLabel}>Day</Text>
            <View style={styles.select}>
              <Text style={styles.selectText}>All Days</Text>
              <MaterialIcons name="calendar-today" size={18} color={BrandColors.onSurfaceVariant} />
            </View>
          </View>
        </View>

        <View style={styles.lead}>
          <View style={styles.leadTop}>
            <View style={{ flex: 1 }}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>ACTIVE NOW</Text>
              </View>
              <Text style={styles.leadTitle}>Advanced Macroeconomics - Section A</Text>
              <Text style={styles.leadSub}>ECON-402 • Upper Level Core</Text>
            </View>
            <TouchableOpacity style={styles.moreBtn} accessibilityRole="button">
              <MaterialIcons name="more-vert" size={22} color={BrandColors.onSecondaryContainer} />
            </TouchableOpacity>
          </View>

          <View style={styles.statsGrid}>
            {[
              { icon: 'group', label: 'Students', value: '42 / 45' },
              { icon: 'meeting-room', label: 'Room', value: 'Hall 302-B' },
              { icon: 'schedule', label: 'Time', value: '09:00 - 10:30' },
              { icon: 'event-available', label: 'Frequency', value: 'Mon, Wed' },
            ].map((s) => (
              <View key={s.label} style={styles.stat}>
                <View style={styles.statIcon}>
                  <MaterialIcons name={s.icon as any} size={20} color={BrandColors.primary} />
                </View>
                <View>
                  <Text style={styles.statLabel}>{s.label}</Text>
                  <Text style={styles.statValue}>{s.value}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.ctaRow}>
            <TouchableOpacity style={styles.btnPrimary} accessibilityRole="button">
              <Text style={styles.btnPrimaryText}>Launch Attendance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGhost} accessibilityRole="button">
              <Text style={styles.btnGhostText}>Course Materials</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.daily}>
          <Text style={[styles.h2, { color: BrandColors.onPrimary }]}>Daily Schedule</Text>
          <View style={{ height: Spacing.md }} />
          <View style={styles.dailyRow}>
            <View>
              <Text style={[styles.bodyLg, { color: BrandColors.onPrimary }]}>Next: Fin. Systems</Text>
              <Text style={[styles.caption, { color: BrandColors.primaryFixed }]}>Starts in 45 mins</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={18} color={BrandColors.onPrimary} />
          </View>
          <View style={styles.divider} />
          <View style={styles.dailyRow}>
            <View>
              <Text style={[styles.bodyLg, { color: 'rgba(255,255,255,0.85)' }]}>Office Hours</Text>
              <Text style={[styles.caption, { color: BrandColors.primaryFixed }]}>14:00 - 15:30</Text>
            </View>
            <MaterialIcons name="work" size={18} color={BrandColors.onPrimary} />
          </View>

          <View style={styles.completion}>
            <Text style={[styles.caption, { color: BrandColors.primaryFixed }]}>Weekly Completion</Text>
            <View style={styles.track}>
              <View style={styles.fill} />
            </View>
            <Text style={[styles.caption, { color: BrandColors.onPrimary, textAlign: 'right' }]}>
              65% of sessions done
            </Text>
          </View>
        </View>

        <View style={styles.smallGrid}>
          {[
            {
              title: 'Financial Systems - Section B',
              sub: 'FIN-305 • Undergraduate',
              students: '38 Students',
              room: 'Lab 104',
              time: '11:00 - 12:30 | Tue, Thu',
            },
            {
              title: 'Applied Econometrics',
              sub: 'ECON-501 • Graduate',
              students: '18 Students',
              room: 'Seminar Room 4',
              time: '15:30 - 18:30 | Wed',
            },
          ].map((c) => (
            <View key={c.title} style={styles.smallCard}>
              <View style={styles.smallTop}>
                <Text style={styles.smallTitle}>{c.title}</Text>
                <MaterialIcons name="grade" size={20} color={BrandColors.onSurfaceVariant} />
              </View>
              <Text style={styles.smallSub}>{c.sub}</Text>
              <View style={{ height: Spacing.sm }} />
              {[
                { icon: 'group', text: c.students },
                { icon: 'meeting-room', text: c.room },
                { icon: 'schedule', text: c.time },
              ].map((m) => (
                <View key={m.text} style={styles.metaRow}>
                  <MaterialIcons name={m.icon as any} size={18} color={BrandColors.secondary} />
                  <Text style={styles.metaText}>{m.text}</Text>
                </View>
              ))}
              <View style={styles.smallFooter}>
                <TouchableOpacity accessibilityRole="button">
                  <Text style={styles.link}>View Roster</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.addCard} accessibilityRole="button">
            <View style={styles.addCircle}>
              <MaterialIcons name="add" size={24} color={BrandColors.onSurfaceVariant} />
            </View>
            <Text style={styles.addTitle}>Assign New Section</Text>
            <Text style={styles.addSub}>Available for Summer Term</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.update}>
          <Text style={styles.h2}>Class Updates</Text>
          <View style={styles.updateCard}>
            <View style={styles.updateIcon}>
              <MaterialIcons name="priority-high" size={22} color={BrandColors.onTertiaryContainer} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.updateTitle}>Exam Period Approaching</Text>
              <Text style={styles.updateText}>
                Mid-term grading for Advanced Macroeconomics needs to be finalized by Friday.
              </Text>
            </View>
            <TouchableOpacity accessibilityRole="button">
              <Text style={styles.link}>Review Grades</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: BrandColors.background },
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
  topLeft: { flexDirection: 'row', alignItems: 'center' },
  topTitle: { ...Typography.h2, color: BrandColors.primary },
  iconBtn: { width: 40, height: 40, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  content: { padding: Spacing.container, paddingBottom: 120 },
  header: { marginBottom: Spacing.lg },
  h1: { ...Typography.h1, color: BrandColors.onSurface },
  h2: { ...Typography.h2, color: BrandColors.onSurface },
  sub: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant, marginTop: 4 },
  filters: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.sm, marginBottom: Spacing.lg },
  filter: { flex: 1, minWidth: 160 },
  filterLabel: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant, marginBottom: 6 },
  select: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: 12,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectText: { ...Typography.bodyMd, color: BrandColors.onSurface },
  lead: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: BrandColors.primary,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  leadTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: Spacing.md },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: BrandColors.primaryContainer,
    borderRadius: Radius.full,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: Spacing.sm,
  },
  badgeText: { ...Typography.labelSm, color: BrandColors.onPrimaryContainer },
  leadTitle: { ...Typography.h1, color: BrandColors.onSurface },
  leadSub: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant, marginTop: 4 },
  moreBtn: { backgroundColor: BrandColors.secondaryContainer, borderRadius: 12, padding: 10 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.md, marginTop: Spacing.lg },
  stat: { width: '48%', flexDirection: 'row', gap: 10, alignItems: 'center' },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: BrandColors.surfaceContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: { ...Typography.caption, color: BrandColors.onSurfaceVariant },
  statValue: { ...Typography.bodyLg, color: BrandColors.onSurface },
  ctaRow: { flexDirection: 'row', gap: Spacing.sm, marginTop: Spacing.xl },
  btnPrimary: { backgroundColor: BrandColors.primary, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 16 },
  btnPrimaryText: { ...Typography.labelSm, color: BrandColors.onPrimary, textAlign: 'center' },
  btnGhost: {
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  btnGhostText: { ...Typography.labelSm, color: BrandColors.onSurface, textAlign: 'center' },
  daily: {
    marginTop: Spacing.lg,
    backgroundColor: BrandColors.primary,
    borderRadius: Radius.md,
    padding: Spacing.lg,
  },
  dailyRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  bodyLg: { ...Typography.bodyLg },
  caption: { ...Typography.caption },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: Spacing.md },
  completion: {
    marginTop: Spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: Radius.md,
    padding: Spacing.md,
  },
  track: { height: 8, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: Radius.full, overflow: 'hidden', marginTop: 6 },
  fill: { height: 8, width: '65%', backgroundColor: '#fff' },
  smallGrid: { marginTop: Spacing.lg, gap: Spacing.md },
  smallCard: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(193,198,213,0.3)',
  },
  smallTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: Spacing.md },
  smallTitle: { ...Typography.bodyLg, color: BrandColors.onSurface, fontFamily: 'Inter_700Bold' },
  smallSub: { ...Typography.caption, color: BrandColors.onSurfaceVariant, marginTop: 4 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8 },
  metaText: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant },
  smallFooter: { marginTop: Spacing.md, paddingTop: Spacing.md, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: 'rgba(193,198,213,0.2)' },
  link: { ...Typography.labelSm, color: BrandColors.primary },
  addCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: BrandColors.outlineVariant,
    borderRadius: Radius.md,
    padding: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BrandColors.surfaceContainerLowest,
  },
  addCircle: {
    width: 48,
    height: 48,
    borderRadius: Radius.full,
    backgroundColor: BrandColors.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  addTitle: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant },
  addSub: { ...Typography.caption, color: BrandColors.outline, marginTop: 4 },
  update: { marginTop: Spacing.xl },
  updateCard: {
    marginTop: Spacing.md,
    backgroundColor: BrandColors.surfaceContainerLow,
    borderRadius: Radius.md,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  updateIcon: {
    width: 48,
    height: 48,
    borderRadius: Radius.full,
    backgroundColor: BrandColors.tertiaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateTitle: { ...Typography.bodyLg, color: BrandColors.onSurface },
  updateText: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant, marginTop: 2, flexShrink: 1 },
});

