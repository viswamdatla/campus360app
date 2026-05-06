import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StudentTopBar } from '@/components/student/StudentTopBar';
import { CampusColors, CampusFonts, CampusRadius, CampusSpace, CampusType } from '@/constants/theme';

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDFCTYpIYCJIRye7T7KAb9Hd7iJU5Vgf_gF07jJDgKwpF16ykcS3IWJcquex31R7CQ5joE58v5eljhXYpEMC8zjR3jYXkcwnJ_YUtMje32adaa2WOLmrc7yvCSoAQmfzFLhoMSvBOGCbUpFdk6G5G76mX9olcRqvsND2b8A1UjXfYpNsVC9QDEZRxizTVir3xwedQVsrv6snP01_Z5jcwqUaOmU6V4HtRS8Lukzyiu-TXNG5xbkDzZOz6M2vL2PdJoqKah-Rq791ug';

const DAYS_TOP = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function StudentAttendanceScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StudentTopBar avatarUri={AVATAR} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 110 }]}>
        <View style={styles.header}>
          <Text style={styles.kicker}>ACADEMIC YEAR 2023-24</Text>
          <Text style={styles.h1}>Attendance Overview</Text>
        </View>

        <View style={styles.gridGap}>
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.smallLabel}>TOTAL PERCENTAGE</Text>
              <View style={styles.circleIcon}>
                <MaterialIcons name="analytics" size={22} color={CampusColors.primary} />
              </View>
            </View>
            <Text style={styles.stat}>92.4%</Text>
            <View style={styles.trendRow}>
              <MaterialIcons name="trending-up" size={18} color={CampusColors.onTertiaryFixedVariant} />
              <Text style={styles.trendText}>+1.2% from last month</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: '92.4%' }]} />
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.metricRow}>
              <View style={[styles.metricIcon, { backgroundColor: '#dcfce7' }]}>
                <MaterialIcons name="check-circle" size={22} color="#15803d" />
              </View>
              <View>
                <Text style={styles.smallLabel}>TOTAL PRESENT</Text>
                <Text style={styles.statInline}>
                  144 <Text style={styles.statInlineMuted}>/ 156</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.metricRow}>
              <View style={[styles.metricIcon, { backgroundColor: '#fee2e2' }]}>
                <MaterialIcons name="cancel" size={22} color="#b91c1c" />
              </View>
              <View>
                <Text style={styles.smallLabel}>TOTAL ABSENT</Text>
                <Text style={styles.statInline}>
                  12 <Text style={styles.statInlineMuted}>Days</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.card, { marginTop: CampusSpace.gutter }]}>
          <View style={[styles.rowBetween, { marginBottom: CampusSpace.md }]}>
            <Text style={styles.h2}>October 2023</Text>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <Pressable style={styles.navBtn}>
                <MaterialIcons name="chevron-left" size={22} color={CampusColors.onSurfaceVariant} />
              </Pressable>
              <Pressable style={styles.navBtn}>
                <MaterialIcons name="chevron-right" size={22} color={CampusColors.onSurfaceVariant} />
              </Pressable>
            </View>
          </View>

          <View style={styles.weekHeader}>
            {DAYS_TOP.map((d, i) => (
              <Text key={`${d}-${i}`} style={styles.weekHeaderText}>
                {d}
              </Text>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {[
              { day: '24', kind: 'muted' },
              { day: '25', kind: 'muted' },
              { day: '26', kind: 'muted' },
              { day: '27', kind: 'muted' },
              { day: '28', kind: 'muted' },
              { day: '29', kind: 'muted' },
              { day: '1', kind: 'low' },
              { day: '2', kind: 'present' },
              { day: '3', kind: 'present' },
              { day: '4', kind: 'present' },
              { day: '5', kind: 'present' },
              { day: '6', kind: 'absent' },
              { day: '7', kind: 'low' },
              { day: '8', kind: 'low' },
              { day: '9', kind: 'present' },
              { day: '10', kind: 'present' },
              { day: '11', kind: 'present' },
              { day: '12', kind: 'present' },
              { day: '13', kind: 'present' },
              { day: '14', kind: 'low' },
              { day: '15', kind: 'low' },
              { day: '16', kind: 'today' },
              { day: '17', kind: 'plain' },
              { day: '18', kind: 'plain' },
              { day: '19', kind: 'plain' },
              { day: '20', kind: 'plain' },
              { day: '21', kind: 'plain' },
              { day: '22', kind: 'plain' },
            ].map((c, idx) => (
              <View key={`${c.day}-${idx}`} style={styles.cellWrap}>
                <View
                  style={[
                    styles.dayCell,
                    c.kind === 'muted' && styles.dayMuted,
                    c.kind === 'low' && styles.dayLow,
                    c.kind === 'present' && styles.dayPresent,
                    c.kind === 'absent' && styles.dayAbsent,
                    c.kind === 'today' && styles.dayToday,
                  ]}>
                  <Text
                    style={[
                      styles.dayText,
                      c.kind === 'muted' && { color: CampusColors.onSurfaceVariant, opacity: 0.4 },
                      c.kind === 'present' && { color: CampusColors.onPrimary, fontFamily: CampusFonts.bodyBold },
                      c.kind === 'absent' && { color: CampusColors.onErrorContainer, fontFamily: CampusFonts.bodyBold },
                      c.kind === 'today' && { color: CampusColors.onPrimary, fontFamily: CampusFonts.bodyBold },
                    ]}>
                    {c.day}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.legendRow}>
            <LegendDot color={CampusColors.primary} label="Present" />
            <LegendDot color={CampusColors.errorContainer} label="Absent" />
            <LegendDot outlined color={CampusColors.primary} label="Today" />
          </View>
        </View>

        <View style={[styles.card, { marginTop: CampusSpace.gutter }]}>
          <View style={styles.rowBetween}>
            <Text style={styles.h2}>Subject Breakdown</Text>
            <Pressable>
              <Text style={styles.link}>View Details</Text>
            </Pressable>
          </View>

          <SubjectRow title="Advanced Mathematics" pct="98%" color={CampusColors.primary} widthPct={98} />
          <SubjectRow title="Quantum Physics" pct="85%" color={CampusColors.primary} widthPct={85} />
          <SubjectRow title="Data Structures" pct="92%" color={CampusColors.primary} widthPct={92} />
          <SubjectRow title="Technical English" pct="74%" color={CampusColors.tertiary} widthPct={74} />
          <SubjectRow title="Humanities" pct="100%" color={CampusColors.primary} widthPct={100} />
        </View>

        <View style={[styles.card, { marginTop: CampusSpace.gutter }]}>
          <Text style={styles.h2}>Recent History</Text>
          <HistoryRow date="Oct 16, 2023" subject="Advanced Mathematics" type="Lecture" status="PRESENT" tone="ok" />
          <HistoryRow date="Oct 15, 2023" subject="Quantum Physics" type="Laboratory" status="PRESENT" tone="ok" />
          <HistoryRow date="Oct 14, 2023" subject="Technical English" type="Tutorial" status="ABSENT" tone="bad" />
        </View>
      </ScrollView>
    </View>
  );
}

function LegendDot({ color, label, outlined }: { color: string; label: string; outlined?: boolean }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <View
        style={[
          { width: 10, height: 10, borderRadius: 5, backgroundColor: color },
          outlined && { backgroundColor: 'transparent', borderWidth: 1, borderColor: color },
        ]}
      />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

function SubjectRow({ title, pct, widthPct, color }: { title: string; pct: string; widthPct: number; color: string }) {
  return (
    <View style={{ marginTop: CampusSpace.md }}>
      <View style={styles.rowBetween}>
        <Text style={styles.bodyLg}>{title}</Text>
        <Text style={[styles.smallLabel, { color }]}>{pct}</Text>
      </View>
      <View style={styles.smallTrack}>
        <View style={[styles.smallFill, { width: `${widthPct}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

function HistoryRow({
  date,
  subject,
  type,
  status,
  tone,
}: {
  date: string;
  subject: string;
  type: string;
  status: string;
  tone: 'ok' | 'bad';
}) {
  return (
    <View style={styles.historyRow}>
      <View style={{ flex: 0.28 }}>
        <Text style={styles.historyText}>{date}</Text>
      </View>
      <View style={{ flex: 0.34 }}>
        <Text style={styles.historyText}>{subject}</Text>
      </View>
      <View style={{ flex: 0.22 }}>
        <Text style={styles.historyText}>{type}</Text>
      </View>
      <View style={{ flex: 0.16, alignItems: 'flex-end' }}>
        <View style={[styles.pill, tone === 'ok' ? styles.pillOk : styles.pillBad]}>
          <Text style={[styles.pillText, tone === 'ok' ? styles.pillOkText : styles.pillBadText]}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: CampusSpace.lg, paddingTop: CampusSpace.lg },
  header: { marginBottom: CampusSpace.xl },
  kicker: { ...CampusType.bodyMd, color: CampusColors.primary, fontFamily: CampusFonts.bodySemiBold, letterSpacing: 1 },
  h1: { ...CampusType.h1, color: CampusColors.onSurface, marginTop: 6 },
  h2: { ...CampusType.h2, color: CampusColors.onSurface },
  card: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    borderWidth: 1,
    borderColor: CampusColors.surfaceContainer,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  gridGap: { gap: CampusSpace.gutter },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  smallLabel: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  circleIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0, 78, 159, 0.1)', alignItems: 'center', justifyContent: 'center' },
  stat: { ...CampusType.stat, color: CampusColors.onSurface, marginTop: 8 },
  trendRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  trendText: { ...CampusType.caption, color: CampusColors.onTertiaryFixedVariant },
  progressTrack: { height: 8, borderRadius: 999, backgroundColor: CampusColors.surfaceContainerLow, marginTop: CampusSpace.lg, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: CampusColors.primary, borderRadius: 999 },
  metricRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  metricIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  statInline: { ...CampusType.stat, fontSize: 26, lineHeight: 32, color: CampusColors.onSurface },
  statInlineMuted: { ...CampusType.h2, fontFamily: CampusFonts.body, color: CampusColors.onSurfaceVariant },
  navBtn: { padding: 6, borderRadius: CampusRadius.sm },
  weekHeader: { flexDirection: 'row', marginBottom: 6 },
  weekHeaderText: { flex: 1, textAlign: 'center', ...CampusType.label, color: CampusColors.onSurfaceVariant },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  cellWrap: { width: '14.28%', padding: 2 },
  dayCell: { height: 44, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  dayText: { ...CampusType.bodyMd, color: CampusColors.onSurface },
  dayMuted: {},
  dayLow: { backgroundColor: CampusColors.surfaceContainerLow },
  dayPresent: { backgroundColor: CampusColors.primary },
  dayAbsent: { backgroundColor: CampusColors.errorContainer },
  dayToday: { backgroundColor: CampusColors.primary, borderWidth: 2, borderColor: CampusColors.primaryContainer },
  legendRow: { flexDirection: 'row', gap: CampusSpace.lg, marginTop: CampusSpace.lg, paddingTop: CampusSpace.md, borderTopWidth: 1, borderTopColor: CampusColors.surfaceVariant },
  legendText: { ...CampusType.caption, color: CampusColors.onSurfaceVariant },
  link: { ...CampusType.label, color: CampusColors.primary },
  bodyLg: { ...CampusType.bodyLg, color: CampusColors.onSurface },
  smallTrack: { height: 6, borderRadius: 999, backgroundColor: CampusColors.surfaceContainerLow, marginTop: 8, overflow: 'hidden' },
  smallFill: { height: '100%', borderRadius: 999 },
  historyRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: CampusColors.outlineVariant },
  historyText: { ...CampusType.caption, color: CampusColors.onSurface },
  pill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  pillText: { fontSize: 10, fontFamily: CampusFonts.bodyBold, letterSpacing: 0.6 },
  pillOk: { backgroundColor: '#dcfce7' },
  pillOkText: { color: '#15803d' },
  pillBad: { backgroundColor: '#fee2e2' },
  pillBadText: { color: '#b91c1c' },
});

