import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/parent/AppHeader';
import {
  CampusColors,
  CampusFonts,
  CampusRadius,
  CampusSpace,
  CampusType,
  ParentSpace,
  ParentType,
  cardShadow,
} from '@/constants/theme';

const CALENDAR_DAYS: { day: number; type?: 'muted' | 'absent' | 'tardy' | 'current' }[] = [
  { day: 28, type: 'muted' },
  { day: 29, type: 'muted' },
  { day: 30, type: 'muted' },
  ...[1, 2, 3, 4, 5].map((d) => ({ day: d })),
  { day: 6, type: 'absent' },
  ...[7, 8, 9, 10, 11, 12, 13].map((d) => ({ day: d })),
  { day: 14, type: 'tardy' },
  ...[15, 16, 17, 18, 19, 20].map((d) => ({ day: d })),
  { day: 21, type: 'current' },
  ...[22, 23, 24, 25].map((d) => ({ day: d })),
];

export default function AttendanceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <View style={styles.pillLabel}>
          <Text style={styles.pillLabelText}>ATTENDANCE OVERVIEW</Text>
        </View>
        <Text style={styles.name}>Liam Richardson</Text>
        <Text style={styles.meta}>Grade 11 • Spring Semester 2024</Text>

        <Pressable style={styles.monthPicker}>
          <MaterialIcons name="calendar-today" size={20} color={CampusColors.primary} />
          <Text style={styles.monthPickerText}>April 2024</Text>
          <MaterialIcons name="expand-more" size={22} color={CampusColors.onSurfaceVariant} />
        </Pressable>

        <View style={styles.statGrid}>
          <StatCard
            border={CampusColors.primary}
            icon="analytics"
            iconBg="rgba(0, 78, 159, 0.1)"
            iconColor={CampusColors.primary}
            label="ATTENDANCE RATE"
            value="96.4%"
            trend="+2%"
          />
          <StatCard
            border={CampusColors.error}
            icon="event-busy"
            iconBg="rgba(255, 218, 214, 0.35)"
            iconColor={CampusColors.error}
            label="TOTAL ABSENCES"
            value="4"
          />
          <StatCard
            border={CampusColors.tertiary}
            icon="schedule"
            iconBg="rgba(255, 219, 203, 0.45)"
            iconColor={CampusColors.tertiary}
            label="LATE ARRIVALS"
            value="2"
          />
          <StatCard
            border={CampusColors.secondary}
            icon="pending-actions"
            iconBg={CampusColors.secondaryContainer}
            iconColor={CampusColors.secondary}
            label="EXCUSED DAYS"
            value="3"
          />
        </View>

        <View style={styles.calendarCard}>
          <View style={styles.calHeader}>
            <Text style={styles.cardTitle}>Monthly Calendar</Text>
            <View style={styles.calNav}>
              <Pressable style={styles.calNavBtn}>
                <MaterialIcons name="chevron-left" size={22} color={CampusColors.onSurfaceVariant} />
              </Pressable>
              <Pressable style={styles.calNavBtn}>
                <MaterialIcons name="chevron-right" size={22} color={CampusColors.onSurfaceVariant} />
              </Pressable>
            </View>
          </View>
          <View style={styles.weekRow}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
              <Text key={d} style={styles.weekDay}>
                {d}
              </Text>
            ))}
          </View>
          <View style={styles.grid}>
            {CALENDAR_DAYS.map((cell, i) => (
              <View key={`${cell.day}-${i}`} style={styles.cellWrap}>
                <DayCell {...cell} />
              </View>
            ))}
          </View>
          <View style={styles.legend}>
            <LegendDot color={CampusColors.error} label="Unexcused" />
            <LegendDot color={CampusColors.tertiary} label="Tardy" />
            <LegendDot color={CampusColors.secondary} label="Excused" />
            <LegendDot color={CampusColors.primary} label="Current Day" />
          </View>
        </View>

        <View style={styles.logCard}>
          <Text style={styles.cardTitle}>Attendance Log</Text>
          <LogItem
            month="APR"
            day="06"
            tone="error"
            title="Unexcused Absence"
            badge="Alert"
            badgeStyle="error"
            desc="Full Day Absence - No reason provided"
          />
          <LogItem
            month="APR"
            day="14"
            tone="tardy"
            title="Late Arrival"
            badge="Tardy"
            badgeStyle="tardy"
            desc="Arrived 15 minutes late to 1st Period"
          />
          <LogItem
            month="MAR"
            day="22"
            tone="excused"
            title="Excused Absence"
            badge="Approved"
            badgeStyle="excused"
            desc="Medical Appointment - Dr. Smith"
          />
          <Pressable style={styles.viewAll}>
            <Text style={styles.viewAllText}>VIEW ALL RECORDS</Text>
          </Pressable>
        </View>

        <View style={styles.reportCard}>
          <View style={styles.reportHead}>
            <View style={styles.reportIcon}>
              <MaterialIcons name="edit-calendar" size={26} color={CampusColors.onPrimary} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.reportTitle}>Report an Absence</Text>
              <Text style={styles.reportSub}>Notify the school of future absences</Text>
            </View>
          </View>
          <Pressable style={styles.submitNote}>
            <Text style={styles.submitNoteText}>Submit Note</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

function StatCard({
  border,
  icon,
  iconBg,
  iconColor,
  label,
  value,
  trend,
}: {
  border: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <View style={[styles.statCard, { borderLeftColor: border }]}>
      <View style={styles.statTop}>
        <View style={[styles.statIcon, { backgroundColor: iconBg }]}>
          <MaterialIcons name={icon} size={22} color={iconColor} />
        </View>
        {trend ? (
          <View style={styles.trend}>
            <MaterialIcons name="trending-up" size={14} color="#16a34a" />
            <Text style={styles.trendText}>{trend}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

function DayCell({ day, type }: { day: number; type?: 'muted' | 'absent' | 'tardy' | 'current' }) {
  return (
    <View
      style={[
        styles.dayCell,
        type === 'muted' && styles.dayMuted,
        type === 'absent' && styles.dayAbsent,
        type === 'tardy' && styles.dayTardy,
        type === 'current' && styles.dayCurrent,
      ]}>
      <Text
        style={[
          styles.dayNum,
          type === 'muted' && { color: CampusColors.outlineVariant },
          type === 'absent' && { color: CampusColors.error },
          type === 'tardy' && { color: CampusColors.tertiary },
          type === 'current' && { color: CampusColors.onPrimaryContainer, fontFamily: CampusFonts.bodyBold },
        ]}>
        {day}
      </Text>
      {(type === 'absent' || type === 'tardy') && (
        <View
          style={[
            styles.dot,
            type === 'tardy' && { backgroundColor: CampusColors.tertiary },
          ]}
        />
      )}
    </View>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

function LogItem({
  month,
  day,
  title,
  badge,
  badgeStyle,
  desc,
  tone,
}: {
  month: string;
  day: string;
  title: string;
  badge: string;
  badgeStyle: 'error' | 'tardy' | 'excused';
  desc: string;
  tone: 'error' | 'tardy' | 'excused';
}) {
  const dateBg =
    tone === 'error'
      ? 'rgba(255, 218, 214, 0.35)'
      : tone === 'tardy'
        ? 'rgba(255, 219, 203, 0.35)'
        : CampusColors.secondaryContainer;
  const dateColor =
    tone === 'error' ? CampusColors.error : tone === 'tardy' ? CampusColors.tertiary : CampusColors.onSecondaryFixedVariant;
  const badgeColors =
    badgeStyle === 'error'
      ? { bg: CampusColors.errorContainer, fg: CampusColors.onErrorContainer }
      : badgeStyle === 'tardy'
        ? { bg: CampusColors.tertiaryFixed, fg: CampusColors.onTertiaryFixedVariant }
        : { bg: CampusColors.secondaryContainer, fg: CampusColors.onSecondaryContainer };

  return (
    <View style={styles.logRow}>
      <View style={[styles.logDate, { backgroundColor: dateBg }]}>
        <Text style={[styles.logMonth, { color: dateColor }]}>{month}</Text>
        <Text style={[styles.logDay, { color: dateColor }]}>{day}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.logTitleRow}>
          <Text style={styles.logTitle}>{title}</Text>
          <View style={[styles.logBadge, { backgroundColor: badgeColors.bg }]}>
            <Text style={[styles.logBadgeText, { color: badgeColors.fg }]}>{badge}</Text>
          </View>
        </View>
        <Text style={styles.logDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: ParentSpace.md, paddingTop: ParentSpace.md },
  pillLabel: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 78, 159, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: CampusRadius.full,
    marginBottom: ParentSpace.sm,
  },
  pillLabelText: {
    ...ParentType.label,
    color: CampusColors.primaryContainer,
    letterSpacing: 0.8,
  },
  name: { ...ParentType.h1, color: CampusColors.onSurface },
  meta: { ...ParentType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 4, marginBottom: ParentSpace.sm },
  monthPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: CampusColors.outlineVariant,
    borderRadius: CampusRadius.md,
    paddingHorizontal: ParentSpace.md,
    paddingVertical: 10,
    marginBottom: ParentSpace.md,
    backgroundColor: CampusColors.surfaceContainerLowest,
  },
  monthPickerText: { ...ParentType.bodyMd, fontFamily: CampusFonts.bodyBold },
  statGrid: { gap: ParentSpace.md, marginBottom: ParentSpace.lg },
  statCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    borderLeftWidth: 4,
    ...cardShadow,
  },
  statTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: ParentSpace.sm },
  statIcon: { width: 40, height: 40, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  trend: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  trendText: { ...ParentType.label, color: '#16a34a' },
  statLabel: { ...ParentType.label, color: CampusColors.onSurfaceVariant, letterSpacing: 0.6 },
  statValue: { ...ParentType.stat, color: CampusColors.onSurface, marginTop: 4 },
  calendarCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: ParentSpace.lg,
    ...cardShadow,
  },
  calHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: ParentSpace.md },
  cardTitle: { ...ParentType.h2, color: CampusColors.onSurface },
  calNav: { flexDirection: 'row', gap: 4 },
  calNavBtn: { padding: 8, borderRadius: CampusRadius.sm },
  weekRow: { flexDirection: 'row', marginBottom: 8 },
  weekDay: { flex: 1, textAlign: 'center', ...CampusType.label, color: CampusColors.outline, fontSize: 11 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cellWrap: { width: '14.28%', aspectRatio: 1, padding: 2 },
  dayCell: {
    flex: 1,
    borderRadius: CampusRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  dayMuted: {},
  dayAbsent: {
    backgroundColor: 'rgba(255, 218, 214, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(186, 26, 26, 0.2)',
  },
  dayTardy: {
    backgroundColor: 'rgba(255, 219, 203, 0.35)',
    borderWidth: 1,
    borderColor: 'rgba(136, 55, 0, 0.2)',
  },
  dayCurrent: {
    backgroundColor: CampusColors.primaryContainer,
    borderWidth: 2,
    borderColor: CampusColors.primary,
  },
  dayNum: { ...CampusType.bodyMd, color: CampusColors.onSurface },
  dot: {
    position: 'absolute',
    bottom: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: CampusColors.error,
  },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: CampusSpace.md, marginTop: CampusSpace.lg, paddingTop: CampusSpace.lg, borderTopWidth: 1, borderTopColor: CampusColors.surfaceContainer },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  logCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.gutter,
    marginBottom: CampusSpace.gutter,
    ...cardShadow,
  },
  logRow: { flexDirection: 'row', gap: CampusSpace.md, paddingVertical: CampusSpace.sm, alignItems: 'center' },
  logDate: {
    width: 52,
    height: 52,
    borderRadius: CampusRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logMonth: { ...CampusType.label, fontSize: 11 },
  logDay: { ...CampusType.h2, marginTop: -4 },
  logTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  logTitle: { ...CampusType.bodyLg, color: CampusColors.onSurface, flex: 1 },
  logBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4 },
  logBadgeText: { fontSize: 10, fontFamily: CampusFonts.bodyBold },
  logDesc: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 4 },
  viewAll: {
    marginTop: CampusSpace.md,
    borderWidth: 1,
    borderColor: CampusColors.outlineVariant,
    borderRadius: CampusRadius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  viewAllText: { ...CampusType.label, color: CampusColors.primary },
  reportCard: {
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.gutter,
    marginBottom: CampusSpace.xl,
    ...cardShadow,
  },
  reportHead: { flexDirection: 'row', gap: CampusSpace.md, marginBottom: CampusSpace.md },
  reportIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportTitle: { ...CampusType.bodyLg, fontFamily: CampusFonts.bodyBold, color: CampusColors.onPrimary },
  reportSub: { ...CampusType.caption, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  submitNote: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitNoteText: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
});
