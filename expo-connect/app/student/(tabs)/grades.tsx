import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StudentTopBar } from '@/components/student/StudentTopBar';
import { CampusColors, CampusFonts, CampusRadius, CampusSpace, CampusType } from '@/constants/theme';

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cylfcYDTDg68WWN6vslOizReWRlllDIPoTMq63SPvkO-q5wTg4ImngUy6ii-o3HNnkWrkgA2z7PdUitU0IAVG2dbsMy8YcSaB_lwNSdVr9Vobc2gixwh0JxpOYjNxNfqeu2zLg2I4hpeF9tycMNtZS6wg3ECe_b-cLs6t-9eggPH6E7WSONCVhginIZkrwwhdh_I5_iOeWiZmbTdqfIiBRgkg_FMcll-rLC_UOTOib0IgwP9pDDhK-B0jq3flWuq5bcPdaiPfLs';

export default function StudentGradesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StudentTopBar avatarUri={AVATAR} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: CampusSpace.lg, paddingBottom: insets.bottom + 110 }}>
        <View style={styles.summaryGrid}>
          <SummaryCard title="Cumulative GPA" value="3.82" sub="Top 5% of Department" tone="primary" />
          <SummaryCard title="Total Credits" value="94 / 120" bar={78} tone="tertiary" />
          <SummaryCard title="Class Rank" value="12th" sub="Out of 340 students" tone="neutral" />
        </View>

        <View style={styles.sectionHead}>
          <Text style={styles.h2}>Academic Transcript</Text>
          <Pressable style={styles.exportBtn}>
            <MaterialIcons name="download" size={18} color={CampusColors.onSurfaceVariant} />
            <Text style={styles.exportText}>Export PDF</Text>
          </Pressable>
        </View>

        <SemesterCard
          title="Spring 2024 (Current)"
          icon="calendar-today"
          pill="Semester GPA: 3.90"
          pillTone="primary"
          rows={[
            { name: 'Advanced Algorithms', code: 'CS-401', credits: '4.0', pct: '94%', grade: 'A' },
            { name: 'Machine Learning Foundations', code: 'CS-405', credits: '4.0', pct: '88%', grade: 'A-' },
            { name: 'Database Management Systems', code: 'CS-302', credits: '3.0', pct: '91%', grade: 'A' },
          ]}
        />

        <SemesterCard
          title="Fall 2023"
          icon="history"
          pill="Semester GPA: 3.75"
          pillTone="neutral"
          rows={[
            { name: 'Computer Networks', code: 'CS-308', credits: '4.0', pct: '84%', grade: 'B+' },
            { name: 'Artificial Intelligence', code: 'CS-310', credits: '4.0', pct: '92%', grade: 'A' },
          ]}
        />

        <View style={styles.distributionGrid}>
          <View style={styles.distCard}>
            <Text style={styles.h2}>Grade Distribution</Text>
            <View style={styles.bars}>
              <Bar label="A" h={0.9} color={CampusColors.primary} />
              <Bar label="B" h={0.6} color={CampusColors.primaryFixed} />
              <Bar label="C" h={0.2} color={CampusColors.surfaceContainerHigh} />
              <Bar label="D" h={0.05} color={CampusColors.surfaceContainer} />
              <Bar label="F" h={0.02} color={CampusColors.errorContainer} />
            </View>
          </View>

          <View style={styles.donutCard}>
            <Donut percent={78} />
            <Text style={styles.donutTitle}>Degree Completion</Text>
            <Text style={styles.donutSub}>You are 26 credits away from graduation. Keep up the great work!</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  h2: { ...CampusType.h2, color: CampusColors.onSurface },
  summaryGrid: { gap: CampusSpace.gutter },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: CampusSpace.xl, marginBottom: CampusSpace.md },
  exportBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, borderWidth: 1, borderColor: CampusColors.outlineVariant, borderRadius: CampusRadius.sm, paddingHorizontal: 12, paddingVertical: 8 },
  exportText: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  distributionGrid: { gap: CampusSpace.gutter, marginTop: CampusSpace.xl, marginBottom: CampusSpace.xl },
  distCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  bars: { height: 180, flexDirection: 'row', alignItems: 'flex-end', gap: 12, paddingHorizontal: 6, marginTop: CampusSpace.lg },
  donutCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  donutTitle: { ...CampusType.bodyLg, color: CampusColors.onSurface, marginTop: 12 },
  donutSub: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, textAlign: 'center', marginTop: 8 },
});

function SummaryCard({
  title,
  value,
  sub,
  bar,
  tone,
}: {
  title: string;
  value: string;
  sub?: string;
  bar?: number;
  tone: 'primary' | 'tertiary' | 'neutral';
}) {
  const icon =
    tone === 'primary' ? 'trending-up' : tone === 'tertiary' ? 'menu-book' : 'workspace-premium';
  const iconBg =
    tone === 'primary'
      ? CampusColors.primaryFixed
      : tone === 'tertiary'
        ? CampusColors.tertiaryFixed
        : CampusColors.surfaceContainerHigh;
  const iconColor = tone === 'tertiary' ? CampusColors.tertiary : tone === 'primary' ? CampusColors.primary : CampusColors.onSurfaceVariant;

  return (
    <View style={summaryStyles.card}>
      <View style={summaryStyles.rowBetween}>
        <Text style={summaryStyles.label}>{title}</Text>
        <View style={[summaryStyles.circle, { backgroundColor: iconBg }]}>
          <MaterialIcons name={icon as any} size={20} color={iconColor} />
        </View>
      </View>
      <Text style={summaryStyles.value}>{value}</Text>
      {sub ? <Text style={summaryStyles.sub}>{sub}</Text> : null}
      {bar ? (
        <View style={summaryStyles.track}>
          <View style={[summaryStyles.fill, { width: `${bar}%`, backgroundColor: CampusColors.tertiary }]} />
        </View>
      ) : null}
    </View>
  );
}

const summaryStyles = StyleSheet.create({
  card: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  rowBetween: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  label: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  circle: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  value: { ...CampusType.stat, color: CampusColors.onSurface, marginTop: 10 },
  sub: { ...CampusType.caption, color: CampusColors.primary, marginTop: 6, fontFamily: CampusFonts.bodyBold },
  track: { height: 8, borderRadius: 999, backgroundColor: CampusColors.surfaceContainer, marginTop: 12, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 999 },
});

function SemesterCard({
  title,
  icon,
  pill,
  pillTone,
  rows,
}: {
  title: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  pill: string;
  pillTone: 'primary' | 'neutral';
  rows: { name: string; code: string; credits: string; pct: string; grade: string }[];
}) {
  const pillBg = pillTone === 'primary' ? CampusColors.primaryContainer : CampusColors.surfaceContainerHigh;
  const pillFg = pillTone === 'primary' ? CampusColors.onPrimaryContainer : CampusColors.onSurfaceVariant;

  return (
    <View style={semStyles.wrap}>
      <View style={semStyles.head}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <MaterialIcons name={icon} size={18} color={pillTone === 'primary' ? CampusColors.primary : CampusColors.onSurfaceVariant} />
          <Text style={semStyles.headTitle}>{title}</Text>
        </View>
        <View style={[semStyles.pill, { backgroundColor: pillBg }]}>
          <Text style={[semStyles.pillText, { color: pillFg }]}>{pill}</Text>
        </View>
      </View>

      <View style={semStyles.tableHead}>
        <Text style={[semStyles.th, { flex: 0.44 }]}>COURSE NAME</Text>
        <Text style={[semStyles.th, { flex: 0.16 }]}>CODE</Text>
        <Text style={[semStyles.th, { flex: 0.14 }]}>CR</Text>
        <Text style={[semStyles.th, { flex: 0.14 }]}>%</Text>
        <Text style={[semStyles.th, { flex: 0.12, textAlign: 'right' }]}>GRADE</Text>
      </View>

      {rows.map((r, idx) => (
        <View key={r.code} style={[semStyles.tr, idx !== 0 && semStyles.trBorder]}>
          <Text style={[semStyles.td, { flex: 0.44 }]}>{r.name}</Text>
          <Text style={[semStyles.tdMuted, { flex: 0.16 }]}>{r.code}</Text>
          <Text style={[semStyles.td, { flex: 0.14 }]}>{r.credits}</Text>
          <Text style={[semStyles.td, { flex: 0.14 }]}>{r.pct}</Text>
          <Text style={[semStyles.tdGrade, { flex: 0.12 }]}>{r.grade}</Text>
        </View>
      ))}
    </View>
  );
}

const semStyles = StyleSheet.create({
  wrap: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    overflow: 'hidden',
    marginTop: CampusSpace.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  head: { backgroundColor: CampusColors.surfaceContainerLow, paddingHorizontal: CampusSpace.lg, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: CampusColors.outlineVariant, gap: 10 },
  headTitle: { ...CampusType.bodyLg, color: CampusColors.onSurface, fontFamily: CampusFonts.bodyBold },
  pill: { borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  pillText: { ...CampusType.label },
  tableHead: { flexDirection: 'row', paddingHorizontal: CampusSpace.lg, paddingVertical: 12 },
  th: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, fontFamily: CampusFonts.bodySemiBold, fontSize: 11 },
  tr: { flexDirection: 'row', paddingHorizontal: CampusSpace.lg, paddingVertical: 12, alignItems: 'center' },
  trBorder: { borderTopWidth: 1, borderTopColor: CampusColors.outlineVariant },
  td: { ...CampusType.caption, color: CampusColors.onSurface },
  tdMuted: { ...CampusType.caption, color: CampusColors.onSurfaceVariant },
  tdGrade: { ...CampusType.caption, color: CampusColors.primary, fontFamily: CampusFonts.bodyBold, textAlign: 'right' },
});

function Bar({ label, h, color }: { label: string; h: number; color: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', gap: 8 }}>
      <View style={{ width: '100%', flex: Math.max(0.02, h), backgroundColor: color, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      <Text style={{ ...CampusType.label, color: CampusColors.onSurfaceVariant }}>{label}</Text>
    </View>
  );
}

function Donut({ percent }: { percent: number }) {
  const r = 58;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - percent / 100);

  return (
    <View style={{ width: 140, height: 140, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ position: 'absolute', width: 140, height: 140, borderRadius: 70, borderWidth: 8, borderColor: CampusColors.surfaceContainer }} />
      {/* Simple faux-donut: we use a bordered ring + text; accurate SVG ring can be added if you want */}
      <View style={{ position: 'absolute', width: 140, height: 140, borderRadius: 70, borderWidth: 8, borderColor: CampusColors.primary, transform: [{ rotate: '-90deg' }] }} />
      <Text style={{ ...CampusType.h1, color: CampusColors.primary }}>{percent}%</Text>
    </View>
  );
}
