import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/parent/AppHeader';
import {
  CampusColors,
  CampusFonts,
  CampusRadius,
  CampusSpace,
  CampusType,
  cardShadow,
} from '@/constants/theme';

const BAR_HEIGHTS = [32, 40, 44, 52, 60];
const BAR_LABELS = ['Sept', 'Oct', 'Nov', 'Dec', 'Jan'];

export default function GradesScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState<'s1' | 's2' | 'pr'>('s1');

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <Text style={styles.kicker}>ACADEMIC PERFORMANCE</Text>
        <Text style={styles.title}>Alex Johnson • 11th Grade</Text>

        <View style={styles.summary}>
          <View style={styles.summaryHalf}>
            <Text style={styles.summaryLabel}>Cumulative GPA</Text>
            <Text style={styles.summaryValue}>3.85</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryHalf}>
            <Text style={styles.summaryLabel}>Class Rank</Text>
            <Text style={styles.summaryValue}>12/340</Text>
          </View>
        </View>

        <View style={styles.tabs}>
          {(
            [
              { id: 's1' as const, label: 'Semester 1' },
              { id: 's2' as const, label: 'Semester 2' },
              { id: 'pr' as const, label: 'Progress Reports' },
            ] as const
          ).map((t) => (
            <Pressable
              key={t.id}
              onPress={() => setTab(t.id)}
              style={[styles.tab, tab === t.id && styles.tabActive]}>
              <Text style={[styles.tabText, tab === t.id && styles.tabTextActive]}>{t.label}</Text>
            </Pressable>
          ))}
        </View>

        <CourseCard
          icon="functions"
          iconBg={CampusColors.primaryFixed}
          iconColor={CampusColors.onPrimaryFixedVariant}
          course="AP Calculus AB"
          teacher="Dr. Sarah Miller"
          grade="A-"
          pct="92.4%"
          midterm="88% (B+)"
          quizzes="94% (A)"
          final="Upcoming"
          absences="2"
          comment="Excellent problem-solving skills. Keep pushing on proofs."
        />
        <CourseCard
          icon="menu-book"
          iconBg={CampusColors.tertiaryFixed}
          iconColor={CampusColors.onTertiaryFixedVariant}
          course="AP English Literature"
          teacher="Ms. Elena Ross"
          grade="B+"
          pct="89.1%"
          midterm="85% (B)"
          quizzes="91% (A-)"
          final="Upcoming"
          absences="0"
          comment="Strong essays; work on thesis clarity."
        />
        <CourseCard
          icon="biotech"
          iconBg="rgba(215, 227, 255, 0.8)"
          iconColor={CampusColors.primary}
          course="Physics Honors"
          teacher="Mr. David Chen"
          grade="A"
          pct="94.0%"
          midterm="92% (A-)"
          quizzes="96% (A)"
          final="Upcoming"
          absences="1"
          comment="Outstanding lab work and participation."
        />

        <View style={styles.trendCard}>
          <Text style={styles.cardTitle}>Grade Trend</Text>
          <View style={styles.chart}>
            {BAR_HEIGHTS.map((h, i) => (
              <View key={BAR_LABELS[i]} style={styles.barCol}>
                <View style={[styles.bar, { height: h, backgroundColor: barColor(i) }]} />
                <Text style={styles.barLabel}>{BAR_LABELS[i]}</Text>
              </View>
            ))}
          </View>
          <View style={styles.insight}>
            <MaterialIcons name="trending-up" size={20} color={CampusColors.onTertiaryFixedVariant} />
            <Text style={styles.insightText}>
              Consistent 12% improvement in STEM subjects since last quarter.
            </Text>
          </View>
        </View>

        <View style={styles.finalsCard}>
          <View style={styles.finalsIcon}>
            <MaterialIcons name="event-available" size={28} color={CampusColors.primary} />
          </View>
          <Text style={styles.finalsTitle}>Upcoming Finals Week</Text>
          <Text style={styles.finalsSub}>June 14 - June 21 • Weighted at 20% of total grade</Text>
          <Pressable style={styles.finalsBtn}>
            <Text style={styles.finalsBtnText}>View Study Resources</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

function barColor(i: number) {
  const t = i / (BAR_HEIGHTS.length - 1);
  const dark = CampusColors.primary;
  return i === BAR_HEIGHTS.length - 1 ? dark : `rgba(0, 78, 159, ${0.35 + t * 0.45})`;
}

function CourseCard({
  icon,
  iconBg,
  iconColor,
  course,
  teacher,
  grade,
  pct,
  midterm,
  quizzes,
  final,
  absences,
  comment,
}: {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  iconBg: string;
  iconColor: string;
  course: string;
  teacher: string;
  grade: string;
  pct: string;
  midterm: string;
  quizzes: string;
  final: string;
  absences: string;
  comment: string;
}) {
  return (
    <View style={styles.course}>
      <View style={styles.courseHead}>
        <View style={[styles.courseIcon, { backgroundColor: iconBg }]}>
          <MaterialIcons name={icon} size={22} color={iconColor} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.courseName}>{course}</Text>
          <Text style={styles.courseTeacher}>{teacher}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.courseGrade}>{grade}</Text>
          <Text style={styles.coursePct}>{pct}</Text>
        </View>
      </View>
      <View style={styles.grid2}>
        <Metric label="Midterm" value={midterm} />
        <Metric label="Quizzes" value={quizzes} />
        <Metric label="Final" value={final} />
        <Metric label="Absences" value={absences} />
      </View>
      <View style={styles.commentBox}>
        <MaterialIcons name="chat-bubble-outline" size={18} color={CampusColors.onPrimaryFixedVariant} />
        <Text style={styles.commentText}>{comment}</Text>
      </View>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metricCell}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricVal}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: CampusSpace.lg, paddingTop: CampusSpace.lg },
  kicker: {
    ...CampusType.label,
    color: CampusColors.onSurfaceVariant,
    letterSpacing: 1,
    marginBottom: 6,
  },
  title: { ...CampusType.h1, color: CampusColors.onSurface, marginBottom: CampusSpace.lg },
  summary: {
    flexDirection: 'row',
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    marginBottom: CampusSpace.lg,
    alignItems: 'center',
  },
  summaryHalf: { flex: 1 },
  summaryDivider: { width: 1, height: 44, backgroundColor: 'rgba(255,255,255,0.35)' },
  summaryLabel: { ...CampusType.label, color: 'rgba(255,255,255,0.85)' },
  summaryValue: { ...CampusType.stat, color: CampusColors.onPrimary, marginTop: 4 },
  tabs: { flexDirection: 'row', gap: 8, marginBottom: CampusSpace.lg, flexWrap: 'wrap' },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: CampusRadius.full,
    backgroundColor: CampusColors.surfaceContainerHighest,
  },
  tabActive: { backgroundColor: CampusColors.primary },
  tabText: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  tabTextActive: { color: CampusColors.onPrimary },
  course: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.gutter,
    marginBottom: CampusSpace.gutter,
    ...cardShadow,
  },
  courseHead: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  courseIcon: { width: 44, height: 44, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  courseName: { fontFamily: CampusFonts.bodyBold, fontSize: 16, color: CampusColors.onSurface },
  courseTeacher: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  courseGrade: { fontFamily: CampusFonts.bodyBold, fontSize: 22, color: CampusColors.primary },
  coursePct: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  grid2: { flexDirection: 'row', flexWrap: 'wrap', marginTop: CampusSpace.md, gap: 8 },
  metricCell: {
    width: '48%',
    backgroundColor: CampusColors.surfaceContainerLow,
    borderRadius: CampusRadius.sm,
    padding: 10,
  },
  metricLabel: { ...CampusType.caption, color: CampusColors.onSurfaceVariant },
  metricVal: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodySemiBold, color: CampusColors.onSurface, marginTop: 4 },
  commentBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'rgba(215, 227, 255, 0.45)',
    borderRadius: CampusRadius.sm,
    padding: CampusSpace.md,
    marginTop: CampusSpace.md,
    alignItems: 'flex-start',
  },
  commentText: { flex: 1, ...CampusType.bodyMd, color: CampusColors.onSurface },
  trendCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.gutter,
    marginBottom: CampusSpace.gutter,
    ...cardShadow,
  },
  cardTitle: { ...CampusType.h2, color: CampusColors.onSurface, marginBottom: CampusSpace.md },
  chart: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 100, paddingHorizontal: 4 },
  barCol: { alignItems: 'center', flex: 1 },
  bar: { width: '55%', borderRadius: 6, minHeight: 8 },
  barLabel: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 8 },
  insight: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: CampusColors.tertiaryFixed,
    borderRadius: CampusRadius.sm,
    padding: CampusSpace.md,
    marginTop: CampusSpace.lg,
    alignItems: 'center',
  },
  insightText: { flex: 1, ...CampusType.bodyMd, color: CampusColors.onTertiaryFixedVariant },
  finalsCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: CampusColors.outlineVariant,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    alignItems: 'center',
    backgroundColor: CampusColors.surfaceContainerLow,
    marginBottom: CampusSpace.xl,
  },
  finalsIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: CampusColors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: CampusSpace.md,
  },
  finalsTitle: { ...CampusType.h2, color: CampusColors.onSurface, textAlign: 'center' },
  finalsSub: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, textAlign: 'center', marginTop: 6 },
  finalsBtn: {
    marginTop: CampusSpace.lg,
    alignSelf: 'stretch',
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },
  finalsBtnText: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodyBold, color: CampusColors.onPrimary },
});
