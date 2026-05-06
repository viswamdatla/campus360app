import React from 'react';
import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StudentTopBar } from '@/components/student/StudentTopBar';
import { CampusColors, CampusFonts, CampusRadius, CampusSpace, CampusType } from '@/constants/theme';

export default function StudentHomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <StudentTopBar avatarUri={AVATAR} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <View style={styles.header}>
          <Text style={styles.h1}>Academic Overview</Text>
          <Text style={styles.sub}>Spring Semester 2024</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View style={styles.iconBox}>
              <Text style={styles.iconGlyph}>✓</Text>
            </View>
            <View style={styles.pillOk}>
              <Text style={styles.pillOkText}>On Track</Text>
            </View>
          </View>
          <Text style={styles.bodyMuted}>Overall Attendance</Text>
          <View style={styles.valueRow}>
            <Text style={styles.stat}>85%</Text>
            <Text style={styles.delta}>↑ 2.4%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '85%' }]} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.h2}>Latest Grades</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.caption}>Current GPA</Text>
              <Text style={styles.gpa}>3.82</Text>
            </View>
          </View>

          <GradeItem icon="terminal" title="Advanced Algorithms" sub="Midterm Exam" grade="A" />
          <GradeItem icon="storage" title="Database Systems" sub="Project Phase 1" grade="A-" />
          <GradeItem icon="hub" title="Network Security" sub="Weekly Quiz" grade="B+" isLast />
        </View>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.h2}>Today's Schedule</Text>
            <Pressable onPress={() => router.push('/student/schedule')}>
              <Text style={styles.link}>View Calendar</Text>
            </Pressable>
          </View>

          <View style={styles.timeline}>
            <TimelineItem
              active
              title="Advanced Algorithms"
              sub="Room 402 • Prof. Sarah Jenkins"
              time="10:00 AM"
            />
            <TimelineItem
              title="Technical Writing"
              sub="Online • Dr. Marcus Thorne"
              time="01:30 PM"
              muted
            />
          </View>
        </View>

        <Pressable style={styles.photoCard} onPress={() => Alert.alert('Campus Life', 'Library hours extended for finals week.')}>
          <Image source={{ uri: CAMPUS_IMG }} style={styles.photoBg} contentFit="cover" />
          <View style={styles.photoOverlay} />
          <View style={styles.photoText}>
            <Text style={styles.photoTitle}>Campus Life</Text>
            <Text style={styles.photoSub}>Library hours extended for finals week. Study hard, Alex!</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
}

function GradeItem({
  icon,
  title,
  sub,
  grade,
  isLast,
}: {
  icon: string;
  title: string;
  sub: string;
  grade: string;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.gradeRow, !isLast && styles.gradeBorder]}>
      <View style={styles.gradeLeft}>
        <View style={styles.gradeIcon}>
          <Text style={styles.gradeIconText}>{icon === 'terminal' ? '</>' : icon === 'storage' ? 'DB' : '∙∙∙'}</Text>
        </View>
        <View>
          <Text style={styles.gradeTitle}>{title}</Text>
          <Text style={styles.gradeSub}>{sub}</Text>
        </View>
      </View>
      <Text style={styles.gradeMark}>{grade}</Text>
    </View>
  );
}

function TimelineItem({
  title,
  sub,
  time,
  active,
  muted,
}: {
  title: string;
  sub: string;
  time: string;
  active?: boolean;
  muted?: boolean;
}) {
  return (
    <View style={[styles.tItem, muted && { opacity: 0.6 }]}>
      <View style={styles.dotWrap}>
        <View style={[styles.dot, { backgroundColor: active ? CampusColors.primary : CampusColors.outlineVariant }]} />
      </View>
      <View style={[styles.tCard, active ? styles.tCardActive : styles.tCardMuted]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.tTitle, active && { color: CampusColors.primary }]}>{title}</Text>
          <Text style={styles.tSub}>{sub}</Text>
        </View>
        <View style={styles.timeRow}>
          <Text style={[styles.timeText, active ? { color: CampusColors.primary } : { color: CampusColors.onSurfaceVariant }]}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
}

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-zN8JzMsY1s5abYjXptA9Z1ZVoJwK-vrCXCJAicbllNF-NefjWOqvzf_ZqgsPBC7CD_fpbd_8iSoXKT6AbCs1k1NAal5Ig2JXgRyLmR8QyJdK7VksdKM1CGfEUS8KUBACeaVoHykKxYlHA8arovK7sLha-pRE5YqPo3PiX0Wg-M8i5Cpy-ss-tcIcu-DuNZ46HRwhup2qy_YBLXm1CnL8V2l5-8EZHVlnWlv_tfyhnZi5iedSNkRgBtX1tetFfYjvXjg7eR5KQc';

const CAMPUS_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC56Cdd2-M2y1fA1mBiZdtlTusFnKDWTX9ieCdG1owdoDftto78t8OX-i7EE09_D0dxjVr5Ed9NWTSgixE3KMdvxnFBVl5DTKnPr66oOlimlY9deSdnaGQbMxDxU3C51p4Eg2nopOrrwOutnhJmWcWjBHvSOzGoFLPRpOah8mL9m5WTWgn1m-mFbSDFkgimKyOBCb_R2eZALZ9QtbxMThoju57tc9yOgGPXUTR4wMejBLTAT4E4QdPOyaYW0sK3KV2z81lZcaN6IXQ';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: CampusSpace.md, paddingTop: CampusSpace.md },
  header: { marginBottom: CampusSpace.gutter },
  h1: { ...CampusType.h2, color: CampusColors.onSurface, fontFamily: CampusFonts.headingBold },
  h2: { ...CampusType.bodyLg, color: CampusColors.onSurface, fontFamily: CampusFonts.headingBold },
  sub: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 4 },
  card: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: CampusSpace.gutter,
  },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  iconBox: { width: 44, height: 44, borderRadius: CampusRadius.sm, backgroundColor: 'rgba(0, 78, 159, 0.1)', alignItems: 'center', justifyContent: 'center' },
  iconGlyph: { color: CampusColors.primary, fontFamily: CampusFonts.bodyBold, fontSize: 16 },
  pillOk: { backgroundColor: '#dcfce7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  pillOkText: { ...CampusType.label, fontSize: 11, color: '#166534' },
  bodyMuted: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 10 },
  valueRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 6 },
  stat: { ...CampusType.h1, color: CampusColors.onSurface, fontFamily: CampusFonts.headingBold },
  delta: { ...CampusType.label, color: '#16a34a' },
  progressTrack: { height: 8, borderRadius: 999, backgroundColor: CampusColors.surfaceContainerHigh, marginTop: CampusSpace.lg, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: CampusColors.primary, borderRadius: 999 },
  caption: { ...CampusType.caption, color: CampusColors.onSurfaceVariant },
  gpa: { ...CampusType.h2, color: CampusColors.primary, fontFamily: CampusFonts.headingBold },
  gradeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  gradeBorder: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: CampusColors.outlineVariant },
  gradeLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  gradeIcon: { width: 40, height: 40, borderRadius: CampusRadius.sm, backgroundColor: CampusColors.surfaceContainer, alignItems: 'center', justifyContent: 'center' },
  gradeIconText: { fontFamily: CampusFonts.bodyBold, color: CampusColors.onSurfaceVariant, fontSize: 12 },
  gradeTitle: { ...CampusType.bodyMd, color: CampusColors.onSurface, fontFamily: CampusFonts.bodySemiBold },
  gradeSub: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  gradeMark: { ...CampusType.bodyLg, color: CampusColors.primary, fontFamily: CampusFonts.headingBold },
  link: { ...CampusType.label, color: CampusColors.primary },
  timeline: { marginTop: CampusSpace.md, paddingLeft: 22 },
  tItem: { flexDirection: 'row', gap: 10, marginTop: 16 },
  dotWrap: { width: 22, alignItems: 'center' },
  dot: { width: 10, height: 10, borderRadius: 5, marginTop: 6, borderWidth: 4, borderColor: CampusColors.surfaceContainerLowest },
  tCard: { flex: 1, borderRadius: CampusRadius.sm, padding: CampusSpace.md, flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  tCardActive: { backgroundColor: CampusColors.surfaceContainerLow },
  tCardMuted: { borderWidth: 1, borderColor: CampusColors.outlineVariant, backgroundColor: CampusColors.surfaceContainerLowest },
  tTitle: { ...CampusType.bodyMd, color: CampusColors.onSurface, fontFamily: CampusFonts.bodySemiBold },
  tSub: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 4 },
  timeRow: { justifyContent: 'center' },
  timeText: { ...CampusType.label, fontFamily: CampusFonts.bodyBold },
  photoCard: { borderRadius: CampusRadius.md, overflow: 'hidden', minHeight: 150, marginBottom: CampusSpace.xl },
  photoBg: { ...StyleSheet.absoluteFillObject },
  photoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 78, 159, 0.55)' },
  photoText: { padding: CampusSpace.lg, position: 'absolute', left: 0, right: 0, bottom: 0 },
  photoTitle: { ...CampusType.h2, color: CampusColors.onPrimary },
  photoSub: { ...CampusType.bodyMd, color: CampusColors.onPrimaryContainer, marginTop: 6 },
});
