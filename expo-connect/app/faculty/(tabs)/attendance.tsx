import React, { useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { BrandColors, Radius, Spacing, Typography } from '@/constants/theme';

type Student = {
  id: string;
  name: string;
  avatar: string;
  history: string;
  status: 'present' | 'late' | 'absent' | 'none';
};

const initialStudents: Student[] = [
  {
    id: '2024-0012',
    name: 'Alexander Wright',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCElJwAeAvPLcqS4fh6JkVAzNaYMvzv5G5qTyeBwL-JcvHqPJvFzzf2_9ggfK-Llk-yuF9pLRzQ48XI7xDezyywK6JIPPSu2q0xx5pAAATUNz8q8zQ_MxT9FVEUqjCgikz7950xn5BzEsArKXyDo_vgc_GN30qnKz-DSof51pEeboQ8SuKgt2slJgwsbQxe31fzHdOadKftrJjG9vlH3X6u8mepJgDQserqF9D0NEk6kMmBJFardZl0dgQ1f7EAnR1ERhmsjdOZDo0',
    history: '98%',
    status: 'present',
  },
  {
    id: '2024-0045',
    name: 'Elena Rodriguez',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVBonFYDGL1KBFBMdpcNvS2658SKX0em4vAHXoF-uXorx1O2MexXeHRm7Y1HX-vXexEaDGDZR8hg81obi5qUuM_dGhcdZHDL4gxX8tL42wLFv2hxBIF-dhSUec69bVLuWvtrdkGPQAo7TIY5hW0ohATdgYD_qIXNxW5JvpLoQY3oBdRCXnqXMOu7c5KWbqZ_Rw6YLOdLa2hM2ljqWMFp7uANRa0k9FHAb0gnVAH3MNICTzFt1Jt2qw6GOCIPzJl94McfaPGjoM9-E',
    history: '92%',
    status: 'late',
  },
  {
    id: '2024-0018',
    name: 'Marcus Chen',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqEBxwWwWcrsircmbCVxipryk5Pn9-hDqVJlGqqHi0J8ioJKVKvBZgqfsHnRccO41TeusctQgG3mlPL5Eq62_pQJ7tK0PiEX1fHKPtPLYJZx8mEZu1vGNZJr7c9rF7wfHYhAiUq1pBQkL4QIW4sJMFz2wPAmF9uoyP7jCLWPCU3jSHwWTRECr_iwwVVNPwVv6btXCFhLVPNmzikjk5tsSfTZqubGv9EDuITEKBvnYqOtvtIpPVHjuBI0oam6Dj99moaUDqpjcVvQk',
    history: '65%',
    status: 'absent',
  },
  {
    id: '2024-0092',
    name: 'Sarah Jenkins',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqWDIQvr_-uE-tUIZIxvayYCJ4TW8Xm_uLNfFWdlu9-oWXMEw6DpWyZJUs6ew6Aec6BSylIwFdBk0gD6MKxAzc_pNTpqKYt-PTPbZRATMusShrUvfzp9josegurSbLvGNQEzhJA1KwYWx8IdiJwZP_RNrv4clUTAN7VH-35LyvF86QCdNdOPcStMr09nK70BBdu-7u8siERT4QvZot73pWCeWJeA_l4qBgm-IGA0XUrTpN685eJVOq-Hks4qICtR7bAD0snQ6JHt8',
    history: '100%',
    status: 'present',
  },
];

export default function AttendanceScreen() {
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return students;
    return students.filter((s) => s.name.toLowerCase().includes(q) || s.id.includes(q));
  }, [query, students]);

  const counts = useMemo(() => {
    const present = students.filter((s) => s.status === 'present').length;
    const late = students.filter((s) => s.status === 'late').length;
    const absent = students.filter((s) => s.status === 'absent').length;
    const total = students.length;
    const pct = total ? Math.round((present / total) * 100) : 0;
    return { present, late, absent, total, pct };
  }, [students]);

  const setStatus = (id: string, status: Student['status']) => {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  };

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

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <View style={styles.bentoRow}>
              <View style={styles.selectorCard}>
                <Text style={styles.eyebrow}>ACTIVE SESSION</Text>
                <Text style={styles.h1}>Advanced Physics II</Text>
                <Text style={styles.sub}>Section B • Room 402</Text>
                <TouchableOpacity style={styles.changeClass} accessibilityRole="button">
                  <Text style={styles.bodyLg}>Change Class</Text>
                  <MaterialIcons name="expand-more" size={22} color={BrandColors.onSurfaceVariant} />
                </TouchableOpacity>
              </View>

              <View style={styles.statsCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.eyebrow}>Live Participation</Text>
                  <View style={styles.statRow}>
                    <Text style={styles.statPct}>{counts.pct}%</Text>
                    <Text style={styles.sub}>Current Capacity</Text>
                  </View>
                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${counts.pct}%` }]} />
                  </View>
                  <View style={styles.progressMeta}>
                    <Text style={styles.caption}>{counts.present} Present</Text>
                    <Text style={styles.caption}>{counts.absent} Absent</Text>
                  </View>
                </View>
                <View style={styles.sideStats}>
                  <View style={styles.sideStat}>
                    <Text style={styles.metricLabel}>Present</Text>
                    <Text style={styles.metricValue}>{counts.present}</Text>
                  </View>
                  <View style={styles.sideStat}>
                    <Text style={styles.metricLabel}>Late</Text>
                    <Text style={styles.metricValue}>{counts.late}</Text>
                  </View>
                  <View style={styles.sideStat}>
                    <Text style={styles.metricLabel}>Absent</Text>
                    <Text style={[styles.metricValue, { color: BrandColors.error }]}>{counts.absent}</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.listHead}>
              <View>
                <Text style={styles.h2}>Student Roll Call</Text>
                <Text style={styles.sub}>{counts.total} total students enrolled</Text>
              </View>
              <View style={styles.searchRow}>
                <View style={styles.searchBox}>
                  <MaterialIcons name="search" size={20} color={BrandColors.onSurfaceVariant} />
                  <TextInput
                    placeholder="Search students..."
                    placeholderTextColor={BrandColors.onSurfaceVariant}
                    style={styles.searchInput}
                    value={query}
                    onChangeText={setQuery}
                  />
                </View>
                <TouchableOpacity style={styles.filterBtn} accessibilityRole="button" accessibilityLabel="Filter">
                  <MaterialIcons name="filter-list" size={22} color={BrandColors.onSurfaceVariant} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.studentCard}>
            <View style={styles.studentLeft}>
              <Image source={{ uri: item.avatar }} style={styles.studentAvatar} />
              <View>
                <Text style={styles.studentName}>{item.name}</Text>
                <Text style={styles.caption}>ID: {item.id}</Text>
              </View>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.smallBtn, item.status === 'present' ? styles.btnPresentActive : styles.btnOutline]}
                accessibilityRole="button"
                onPress={() => setStatus(item.id, 'present')}
              >
                <MaterialIcons
                  name="check-circle"
                  size={18}
                  color={item.status === 'present' ? BrandColors.onPrimaryContainer : BrandColors.onSurfaceVariant}
                />
                <Text style={[styles.smallBtnText, item.status === 'present' ? styles.smallBtnTextActive : null]}>
                  Present
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.smallBtn, item.status === 'late' ? styles.btnLateActive : styles.btnOutline]}
                accessibilityRole="button"
                onPress={() => setStatus(item.id, 'late')}
              >
                <MaterialIcons
                  name="schedule"
                  size={18}
                  color={item.status === 'late' ? BrandColors.onSecondaryFixedVariant : BrandColors.onSurfaceVariant}
                />
                <Text style={[styles.smallBtnText, item.status === 'late' ? styles.smallBtnTextLate : null]}>
                  Late
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.smallBtn, item.status === 'absent' ? styles.btnAbsentActive : styles.btnOutline]}
                accessibilityRole="button"
                onPress={() => setStatus(item.id, 'absent')}
              >
                <MaterialIcons
                  name="cancel"
                  size={18}
                  color={item.status === 'absent' ? BrandColors.onErrorContainer : BrandColors.onSurfaceVariant}
                />
                <Text style={[styles.smallBtnText, item.status === 'absent' ? styles.smallBtnTextAbsent : null]}>
                  Absent
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.historyPill}>
              <Text style={styles.historyText}>History: {item.history}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.finalize} accessibilityRole="button">
            <Text style={styles.finalizeText}>Finalize Attendance</Text>
            <MaterialIcons name="send" size={22} color={BrandColors.onPrimary} />
          </TouchableOpacity>
        }
      />
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
  topLeft: { flexDirection: 'row', alignItems: 'center' },
  topTitle: { ...Typography.h2, color: BrandColors.primary },
  iconBtn: { width: 40, height: 40, borderRadius: Radius.full, alignItems: 'center', justifyContent: 'center' },
  content: { padding: Spacing.container, paddingBottom: 120, gap: Spacing.sm },
  bentoRow: { gap: Spacing.gutter },
  selectorCard: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  statsCard: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    flexDirection: 'row',
    gap: Spacing.md,
  },
  eyebrow: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant, letterSpacing: 1, textTransform: 'uppercase' },
  h1: { ...Typography.h1, color: BrandColors.onSurface, marginTop: 4 },
  h2: { ...Typography.h2, color: BrandColors.onSurface },
  sub: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant, marginTop: 4 },
  bodyLg: { ...Typography.bodyLg, color: BrandColors.onSurface },
  changeClass: {
    marginTop: Spacing.md,
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, marginTop: 6 },
  statPct: { ...Typography.stat, color: BrandColors.primary },
  progressTrack: { height: 12, borderRadius: Radius.full, backgroundColor: BrandColors.surfaceContainerHighest, overflow: 'hidden', marginTop: Spacing.md },
  progressFill: { height: 12, backgroundColor: BrandColors.primary, borderRadius: Radius.full },
  progressMeta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  caption: { ...Typography.caption, color: BrandColors.onSurfaceVariant },
  sideStats: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: BrandColors.outlineVariant,
    paddingLeft: Spacing.md,
    justifyContent: 'space-between',
  },
  sideStat: { minWidth: 70 },
  metricLabel: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant },
  metricValue: { ...Typography.h2, color: BrandColors.onSurface, marginTop: 4 },
  listHead: { marginTop: Spacing.lg, marginBottom: Spacing.md, gap: Spacing.md },
  searchRow: { flexDirection: 'row', gap: Spacing.xs, alignItems: 'center' },
  searchBox: {
    flex: 1,
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: { flex: 1, ...Typography.bodyMd, color: BrandColors.onSurface },
  filterBtn: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BrandColors.surfaceContainerLowest,
  },
  studentCard: {
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    gap: Spacing.md,
  },
  studentLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  studentAvatar: { width: 48, height: 48, borderRadius: 12, backgroundColor: BrandColors.surfaceContainer },
  studentName: { ...Typography.bodyLg, color: BrandColors.onSurface, fontFamily: 'Inter_600SemiBold' },
  actions: { flexDirection: 'row', gap: Spacing.xs, flexWrap: 'wrap' },
  smallBtn: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: Spacing.md, paddingVertical: 10, borderRadius: 12 },
  btnOutline: { borderWidth: 1, borderColor: BrandColors.outlineVariant, backgroundColor: 'transparent' },
  btnPresentActive: { backgroundColor: BrandColors.primaryContainer, borderWidth: 1, borderColor: BrandColors.primaryContainer },
  btnLateActive: { backgroundColor: BrandColors.secondaryContainer, borderWidth: 1, borderColor: BrandColors.secondaryContainer },
  btnAbsentActive: { backgroundColor: BrandColors.errorContainer, borderWidth: 1, borderColor: BrandColors.errorContainer },
  smallBtnText: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant },
  smallBtnTextActive: { color: BrandColors.onPrimaryContainer },
  smallBtnTextLate: { color: BrandColors.onSecondaryFixedVariant },
  smallBtnTextAbsent: { color: BrandColors.onErrorContainer },
  historyPill: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: Radius.full, backgroundColor: BrandColors.secondaryContainer },
  historyText: { ...Typography.labelSm, color: BrandColors.onSecondaryFixedVariant },
  finalize: {
    marginTop: Spacing.lg,
    backgroundColor: BrandColors.primary,
    borderRadius: Radius.md,
    paddingVertical: 14,
    paddingHorizontal: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  finalizeText: { ...Typography.h2, color: BrandColors.onPrimary },
});

