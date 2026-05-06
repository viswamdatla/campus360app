import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StudentTopBar } from '@/components/student/StudentTopBar';
import { CampusColors, CampusFonts, CampusRadius, CampusSpace, CampusType } from '@/constants/theme';

export default function StudentScheduleScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StudentTopBar avatarUri={AVATAR} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: CampusSpace.lg, paddingBottom: insets.bottom + 110 }}>
        <View style={styles.header}>
          <Text style={styles.h1}>Weekly Timetable</Text>
          <Text style={styles.sub}>Winter Semester • Week 08</Text>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.grayBtn}>
            <MaterialIcons name="filter-list" size={18} color={CampusColors.onSurfaceVariant} />
            <Text style={styles.grayBtnText}>Filter</Text>
          </Pressable>
          <Pressable style={styles.primaryBtn}>
            <MaterialIcons name="print" size={18} color={CampusColors.onPrimary} />
            <Text style={styles.primaryBtnText}>Export PDF</Text>
          </Pressable>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dayStrip}>
          <DayPill day="MON" date="12" active />
          <DayPill day="TUE" date="13" />
          <DayPill day="WED" date="14" outlined />
          <DayPill day="THU" date="15" />
          <DayPill day="FRI" date="16" />
        </ScrollView>

        <View style={{ gap: 14 }}>
          <TimeCard
            time="09:00 AM"
            border={CampusColors.primary}
            title="Advanced Molecular Biology"
            tag="Lecture"
            tagTone="primary"
            teacher="Dr. Eleanor Vance"
            room="Lab Block B • Room 402"
          />
          <TimeCard
            time="11:30 AM"
            border={CampusColors.tertiary}
            title="Statistics for Research"
            tag="Seminar"
            tagTone="tertiary"
            teacher="Prof. Julian Thorne"
            room="Main Hall • Theater 1"
          />

          <View style={styles.lunchRow}>
            <Text style={styles.lunchTime}>01:00 PM</Text>
            <View style={styles.lunchLine} />
            <View style={styles.lunchPill}>
              <Text style={styles.lunchPillText}>Lunch Break</Text>
            </View>
            <View style={styles.lunchLine} />
          </View>

          <TimeCard
            time="02:30 PM"
            border={CampusColors.onSecondaryFixedVariant}
            title="Ethics in Global Governance"
            tag="Mandatory"
            tagTone="secondary"
            teacher="Dr. Sarah Jenkins"
            room="Social Sciences • Room 12"
          />
        </View>

        <View style={{ marginTop: CampusSpace.xl }}>
          <Text style={styles.h2}>Assignment Deadlines</Text>
          <View style={{ gap: 12, marginTop: 12 }}>
            <DeadlineRow
              icon="priority-high"
              iconBg={CampusColors.errorContainer}
              iconColor={CampusColors.onErrorContainer}
              title="Bio Lab Report"
              sub="Due in 4 hours"
              subColor={CampusColors.error}
            />
            <DeadlineRow
              icon="edit-note"
              iconBg={CampusColors.primaryFixed}
              iconColor={CampusColors.onPrimaryFixedVariant}
              title="Ethics Reflection Paper"
              sub="Due Friday, 11:59 PM"
              subColor={CampusColors.onSurfaceVariant}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAeBF3M2LojApyfMgyHY0NM2xzrp67QNo75hwyc9MZ0KxfNQo6VQy2zfLlAtKqOPS_clwNLTbGvEObg7BfL9wMjSicc44_aUE5nQNjuhogzZ_2-Cutd7CTMAUqdQEfbU3qkckGseNiZyFqG30l25h7yreQfE-INR54KS2o8XR4zFXmDv3YWhUp65pJsgDiz4z6CZrkg_84VBmcntWgBUcUiNfm1i2wbQOeaRqyDNmJMpoZ-mBpoAvTfLosd6Z0V85LCC-7X2YpcgC8';

function DayPill({ day, date, active, outlined }: { day: string; date: string; active?: boolean; outlined?: boolean }) {
  const bg = active ? CampusColors.primaryContainer : CampusColors.surfaceContainerLowest;
  const fg = active ? CampusColors.onPrimaryContainer : outlined ? CampusColors.primary : CampusColors.onSurfaceVariant;
  return (
    <View
      style={[
        styles.dayPill,
        { backgroundColor: bg },
        outlined && { borderWidth: 2, borderColor: 'rgba(0, 78, 159, 0.2)' },
        active && { borderWidth: 2, borderColor: CampusColors.primary },
      ]}>
      <Text style={[styles.daySmall, { color: fg, opacity: active ? 0.8 : outlined ? 1 : 0.6 }]}>{day}</Text>
      <Text style={[styles.dayBig, { color: fg }]}>{date}</Text>
    </View>
  );
}

function TimeCard({
  time,
  border,
  title,
  tag,
  tagTone,
  teacher,
  room,
}: {
  time: string;
  border: string;
  title: string;
  tag: string;
  tagTone: 'primary' | 'tertiary' | 'secondary';
  teacher: string;
  room: string;
}) {
  const tagBg =
    tagTone === 'primary'
      ? 'rgba(0, 78, 159, 0.1)'
      : tagTone === 'tertiary'
        ? 'rgba(136, 55, 0, 0.1)'
        : CampusColors.secondaryContainer;
  const tagFg = tagTone === 'secondary' ? CampusColors.onSecondaryContainer : tagTone === 'tertiary' ? CampusColors.tertiary : CampusColors.primary;

  return (
    <View style={styles.timeRow}>
      <View style={styles.timeRail}>
        <Text style={styles.timeText}>{time}</Text>
        <View style={styles.timeLine} />
      </View>
      <View style={[styles.timeCard, { borderLeftColor: border }]}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={[styles.tagPill, { backgroundColor: tagBg }]}>
            <Text style={[styles.tagText, { color: tagFg }]}>{tag}</Text>
          </View>
        </View>
        <View style={styles.metaRow}>
          <MaterialIcons name="person-outline" size={18} color={CampusColors.onSurfaceVariant} />
          <Text style={styles.metaText}>{teacher}</Text>
        </View>
        <View style={styles.metaRow}>
          <MaterialIcons name="place" size={18} color={CampusColors.onSurfaceVariant} />
          <Text style={styles.metaText}>{room}</Text>
        </View>
      </View>
    </View>
  );
}

function DeadlineRow({
  icon,
  iconBg,
  iconColor,
  title,
  sub,
  subColor,
}: {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  iconBg: string;
  iconColor: string;
  title: string;
  sub: string;
  subColor: string;
}) {
  return (
    <View style={styles.deadlineRow}>
      <View style={[styles.deadlineIcon, { backgroundColor: iconBg }]}>
        <MaterialIcons name={icon} size={20} color={iconColor} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.deadlineTitle}>{title}</Text>
        <Text style={[styles.deadlineSub, { color: subColor }]}>{sub}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={22} color={CampusColors.outline} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  header: { marginBottom: CampusSpace.md },
  h1: { ...CampusType.h1, color: CampusColors.onSurface },
  h2: { ...CampusType.h2, color: CampusColors.onSurface, marginTop: CampusSpace.md },
  sub: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 4 },
  actions: { flexDirection: 'row', gap: 10, marginTop: CampusSpace.md, marginBottom: CampusSpace.md },
  grayBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: CampusColors.surfaceContainerHighest, paddingHorizontal: 14, paddingVertical: 10, borderRadius: CampusRadius.sm },
  grayBtnText: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  primaryBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: CampusColors.primary, paddingHorizontal: 14, paddingVertical: 10, borderRadius: CampusRadius.sm },
  primaryBtnText: { ...CampusType.label, color: CampusColors.onPrimary },
  dayStrip: { gap: 10, paddingVertical: 10 },
  dayPill: { width: 70, paddingVertical: 10, borderRadius: CampusRadius.md, alignItems: 'center' },
  daySmall: { ...CampusType.label },
  dayBig: { ...CampusType.h2 },
  timeRow: { flexDirection: 'row', gap: 12 },
  timeRail: { alignItems: 'center', paddingTop: 4 },
  timeText: { ...CampusType.label, color: CampusColors.onSurfaceVariant, minWidth: 72 },
  timeLine: { width: 2, flex: 1, backgroundColor: CampusColors.outlineVariant, marginTop: 10, borderRadius: 2 },
  timeCard: {
    flex: 1,
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  rowBetween: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 },
  cardTitle: { ...CampusType.h2, color: CampusColors.onSurface, flex: 1 },
  tagPill: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  tagText: { ...CampusType.label },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 },
  metaText: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant },
  lunchRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10 },
  lunchTime: { ...CampusType.label, color: CampusColors.onSurfaceVariant, opacity: 0.4, minWidth: 72, textAlign: 'center' },
  lunchLine: { flex: 1, height: 1, backgroundColor: CampusColors.outlineVariant, opacity: 0.7 },
  lunchPill: { backgroundColor: CampusColors.surfaceContainerHigh, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999 },
  lunchPillText: { ...CampusType.label, color: CampusColors.onSurfaceVariant, fontStyle: 'italic' },
  deadlineRow: { backgroundColor: CampusColors.surfaceContainerLow, padding: CampusSpace.md, borderRadius: CampusRadius.md, flexDirection: 'row', alignItems: 'center', gap: 12 },
  deadlineIcon: { width: 40, height: 40, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  deadlineTitle: { ...CampusType.bodyLg, color: CampusColors.onSurface },
  deadlineSub: { ...CampusType.caption, marginTop: 2, fontFamily: CampusFonts.bodySemiBold },
});
