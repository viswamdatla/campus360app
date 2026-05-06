import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/parent/AppHeader';
import { useAuth } from '@/context/AuthContext';
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

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <View style={styles.hero}>
          <Text style={styles.greet}>Good Morning, Sarah</Text>
          <Text style={styles.heroTitle}>{`Alex's Academic Overview`}</Text>
          <View style={styles.chip}>
            <MaterialIcons name="school" size={18} color={CampusColors.primary} />
            <Text style={styles.chipText}>St. Jude High • Grade 10-B</Text>
          </View>
        </View>

        <View style={styles.metrics}>
          <View style={[styles.metricCard, { borderLeftColor: CampusColors.primary }]}>
            <View style={styles.metricTop}>
              <View style={[styles.iconBox, { backgroundColor: CampusColors.primaryFixed }]}>
                <MaterialIcons name="grade" size={20} color={CampusColors.onPrimaryFixedVariant} />
              </View>
              <View style={styles.badgeBlue}>
                <Text style={styles.badgeBlueText}>TOP 5%</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Current GPA</Text>
            <Text style={styles.metricValue}>
              3.85 <Text style={styles.metricSuffix}>/ 4.0</Text>
            </Text>
            <View style={styles.metricFoot}>
              <MaterialIcons name="trending-up" size={16} color={CampusColors.primary} />
              <Text style={styles.metricFootPrimary}>+0.2 from last term</Text>
            </View>
          </View>

          <View style={[styles.metricCard, { borderLeftColor: CampusColors.tertiary }]}>
            <View style={styles.metricTop}>
              <View style={[styles.iconBox, { backgroundColor: CampusColors.tertiaryFixed }]}>
                <MaterialIcons name="event-available" size={20} color={CampusColors.onTertiaryFixedVariant} />
              </View>
            </View>
            <Text style={styles.metricLabel}>Attendance</Text>
            <Text style={styles.metricValue}>96.4%</Text>
            <View style={styles.metricFoot}>
              <MaterialIcons name="info-outline" size={16} color={CampusColors.onSurfaceVariant} />
              <Text style={styles.metricFootMuted}>2 excused absences this term</Text>
            </View>
          </View>

          <View style={[styles.metricCard, { borderLeftColor: CampusColors.error }]}>
            <View style={styles.metricTop}>
              <View style={[styles.iconBox, { backgroundColor: 'rgba(255, 218, 214, 0.5)' }]}>
                <MaterialIcons name="payments" size={20} color={CampusColors.error} />
              </View>
              <View style={styles.badgeRed}>
                <Text style={styles.badgeRedText}>DUE IN 3 DAYS</Text>
              </View>
            </View>
            <Text style={styles.metricLabel}>Pending Fees</Text>
            <Text style={styles.metricValue}>$1,250.00</Text>
            <Pressable style={styles.payRow}>
              <Text style={styles.payNow}>Pay Now</Text>
              <MaterialIcons name="chevron-right" size={18} color={CampusColors.primary} />
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.cardTitle}>Upcoming Schedule</Text>
            <Pressable>
              <Text style={styles.link}>View Full Calendar</Text>
            </Pressable>
          </View>
          <ScheduleRow time="08:30" ampm="AM" title="Advanced Mathematics" sub="Room 402 • Prof. Richardson" highlight next />
          <ScheduleRow time="10:15" ampm="AM" title="World History" sub="Library Hall • Ms. Gisselle" />
          <ScheduleRow time="01:00" ampm="PM" title="Computer Science Lab" sub="Lab 2 • Mr. Henderson" />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Grades</Text>
          <GradeRow name="Physics Quiz #4" date="Oct 12, 2023" letter="A-" score="92/100" />
          <GradeRow name="English Essay" date="Oct 10, 2023" letter="B+" score="88/100" />
          <GradeRow name="Chemistry Project" date="Oct 05, 2023" letter="A" score="98/100" />
          <Pressable style={styles.outlineBtn}>
            <Text style={styles.outlineBtnText}>Report Card PDF</Text>
          </Pressable>
        </View>

        <View style={styles.ctaBanner}>
          <View style={styles.ctaRow}>
            <View style={styles.ctaIcon}>
              <MaterialIcons name="campaign" size={28} color={CampusColors.onPrimary} />
            </View>
            <View style={styles.ctaTextCol}>
              <Text style={styles.ctaTitle}>Parent-Teacher Conference</Text>
              <Text style={styles.ctaSub}>
                Scheduled for Friday, October 20th at 3:30 PM. Room 102.
              </Text>
            </View>
          </View>
          <Pressable style={styles.ctaBtn}>
            <Text style={styles.ctaBtnText}>Confirm Attendance</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.signOut}
          onPress={async () => {
            await signOut();
            router.replace('/');
          }}>
          <Text style={styles.signOutText}>Sign out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

function ScheduleRow({
  time,
  ampm,
  title,
  sub,
  highlight,
  next,
}: {
  time: string;
  ampm: string;
  title: string;
  sub: string;
  highlight?: boolean;
  next?: boolean;
}) {
  return (
    <View
      style={[
        styles.schedRow,
        highlight && { backgroundColor: CampusColors.surfaceBright, borderLeftWidth: 4, borderLeftColor: CampusColors.primary },
        !highlight && { backgroundColor: 'rgba(242, 243, 252, 0.5)' },
      ]}>
      <View style={styles.timeCol}>
        <Text style={styles.timeMain}>{time}</Text>
        <Text style={styles.timeAmpm}>{ampm}</Text>
      </View>
      <View style={styles.schedBody}>
        <Text style={styles.schedTitle}>{title}</Text>
        <Text style={styles.schedSub}>{sub}</Text>
      </View>
      {next ? (
        <View style={styles.nextPill}>
          <Text style={styles.nextPillText}>NEXT</Text>
        </View>
      ) : null}
    </View>
  );
}

function GradeRow({
  name,
  date,
  letter,
  score,
}: {
  name: string;
  date: string;
  letter: string;
  score: string;
}) {
  return (
    <View style={styles.gradeRow}>
      <View>
        <Text style={styles.gradeName}>{name}</Text>
        <Text style={styles.gradeDate}>{date}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.gradeLetter}>{letter}</Text>
        <Text style={styles.gradeScore}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: ParentSpace.md, paddingTop: ParentSpace.md },
  hero: { marginBottom: CampusSpace.xl },
  greet: { ...ParentType.label, color: CampusColors.onSurfaceVariant, marginBottom: 4 },
  heroTitle: { ...ParentType.h1, color: CampusColors.onSurface, marginBottom: ParentSpace.md },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    backgroundColor: CampusColors.surfaceContainerLow,
    paddingHorizontal: CampusSpace.md,
    paddingVertical: CampusSpace.sm,
    borderRadius: CampusRadius.md,
  },
  chipText: { ...ParentType.label, color: CampusColors.primary },
  metrics: { gap: ParentSpace.gutter, marginBottom: ParentSpace.gutter },
  metricCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    borderLeftWidth: 4,
    ...cardShadow,
  },
  metricTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: CampusSpace.sm },
  iconBox: { padding: 8, borderRadius: CampusRadius.sm },
  badgeBlue: {
    backgroundColor: 'rgba(0, 102, 204, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: CampusRadius.full,
  },
  badgeBlueText: { fontSize: 10, fontFamily: CampusFonts.bodyBold, color: CampusColors.primaryContainer },
  badgeRed: {
    backgroundColor: CampusColors.errorContainer,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: CampusRadius.full,
  },
  badgeRedText: { fontSize: 10, fontFamily: CampusFonts.bodyBold, color: CampusColors.onErrorContainer },
  metricLabel: { ...ParentType.label, color: CampusColors.onSurfaceVariant },
  metricValue: { ...ParentType.stat, color: CampusColors.onSurface, marginTop: 4 },
  metricSuffix: { ...ParentType.bodyMd, fontFamily: CampusFonts.body },
  metricFoot: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: CampusSpace.sm },
  metricFootPrimary: { fontSize: 12, color: CampusColors.primary, fontFamily: CampusFonts.body },
  metricFootMuted: { fontSize: 12, color: CampusColors.onSurfaceVariant, fontFamily: CampusFonts.body },
  payRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: CampusSpace.sm },
  payNow: { fontSize: 12, fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
  card: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: ParentSpace.gutter,
    ...cardShadow,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: ParentSpace.md },
  cardTitle: { ...ParentType.h2, color: CampusColors.onSurface },
  link: { ...ParentType.label, color: CampusColors.primary },
  schedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: CampusSpace.md,
    borderRadius: CampusRadius.sm,
    marginBottom: CampusSpace.md,
    gap: CampusSpace.md,
  },
  timeCol: {
    minWidth: 56,
    alignItems: 'center',
    paddingRight: CampusSpace.md,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: CampusColors.outlineVariant,
  },
  timeMain: { fontFamily: CampusFonts.bodyBold, fontSize: 14, color: CampusColors.onSurface },
  timeAmpm: { fontSize: 10, color: CampusColors.onSurfaceVariant, textTransform: 'uppercase' },
  schedBody: { flex: 1 },
  schedTitle: { fontFamily: CampusFonts.bodyBold, fontSize: 15, color: CampusColors.onSurface },
  schedSub: { ...ParentType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  nextPill: {
    backgroundColor: CampusColors.primaryFixed,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: CampusRadius.full,
  },
  nextPillText: { fontSize: 10, fontFamily: CampusFonts.bodyBold, color: CampusColors.onPrimaryFixed },
  gradeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: ParentSpace.md,
  },
  gradeName: { fontFamily: CampusFonts.bodyBold, fontSize: 15, color: CampusColors.onSurface },
  gradeDate: { ...ParentType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  gradeLetter: { fontFamily: CampusFonts.bodyBold, fontSize: 15, color: CampusColors.primary },
  gradeScore: { fontSize: 10, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  outlineBtn: {
    marginTop: CampusSpace.md,
    borderWidth: 1,
    borderColor: CampusColors.outlineVariant,
    borderRadius: CampusRadius.sm,
    paddingVertical: CampusSpace.sm,
    alignItems: 'center',
  },
  outlineBtnText: { fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
  ctaBanner: {
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: CampusSpace.xl,
    overflow: 'hidden',
  },
  ctaRow: { flexDirection: 'row', alignItems: 'center', gap: CampusSpace.md, marginBottom: CampusSpace.md },
  ctaIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaTextCol: { flex: 1 },
  ctaTitle: { ...ParentType.h2, color: CampusColors.onPrimary },
  ctaSub: { ...ParentType.bodyMd, color: 'rgba(215, 227, 255, 0.85)', marginTop: 4 },
  ctaBtn: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.sm,
    paddingVertical: CampusSpace.sm,
    alignItems: 'center',
  },
  ctaBtnText: { fontFamily: CampusFonts.bodyBold, color: CampusColors.primary, fontSize: 15 },
  signOut: { alignItems: 'center', paddingVertical: 16, marginTop: 8 },
  signOutText: { ...CampusType.label, color: CampusColors.primary },
});
