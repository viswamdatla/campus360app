import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
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

const MAP_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA1vsxpWLnRE8-4QWzCwb_fNXOSoibFfap2kOEbs9znCOu4Orw0fbmOhDlD4rc9Jfnb37Np1Wl37kF7zXV3hedkC7JlsceAKSLIoC0bnRGaQwjaxLiFgrzmAwZoALXvR_6QN4RLEDtuRhoHLLSA2R_qIk6TLkpRKShuMwUyRQPSJDqEbZ1nFtdFxKuZCa9xsXJy6DCySTjWRnEquNNDKd2ZCcCUBVOt-Cjl3yEIE6A-4hIy0T_4JIpBZVR-OWgV0pkMMeuvhVyyRF8';

export default function ScheduleScreen() {
  const insets = useSafeAreaInsets();
  const [mode, setMode] = useState<'weekly' | 'monthly'>('weekly');

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <Text style={styles.pageTitle}>Student Schedule</Text>
        <Text style={styles.subtitle}>
          Viewing timetable for <Text style={styles.subtitleBold}>Marcus Thompson</Text> • Grade 10-B
        </Text>

        <View style={styles.segment}>
          <Pressable
            onPress={() => setMode('weekly')}
            style={[styles.segmentBtn, mode === 'weekly' && styles.segmentBtnActive]}>
            <Text style={[styles.segmentLabel, mode === 'weekly' && styles.segmentLabelActive]}>Weekly</Text>
          </Pressable>
          <Pressable
            onPress={() => setMode('monthly')}
            style={[styles.segmentBtn, mode === 'monthly' && styles.segmentBtnActive]}>
            <Text style={[styles.segmentLabel, mode === 'monthly' && styles.segmentLabelActive]}>Monthly</Text>
          </Pressable>
        </View>

        <View style={styles.currentDay}>
          <Text style={styles.currentDayLabel}>CURRENT DAY</Text>
          <Text style={styles.currentDayName}>Monday</Text>
          <Text style={styles.currentDayDate}>Oct 23, 2023</Text>
        </View>

        <ClassCard
          start="08:30 AM"
          end="09:45 AM"
          subject="Mathematics"
          subjectTone="blue"
          title="Advanced Calculus II"
          locationIcon="place"
          location="Room 402 • Science Wing"
          teacher="Dr. Emily Richardson"
          menu
        />

        <ClassCard
          active
          start="10:00 AM"
          end="11:15 AM"
          subject="Literature"
          subjectTone="orange"
          title="British Literature Studies"
          locationIcon="place"
          location="Main Hall • Room B"
          teacher="Mr. Arthur Miller"
        />

        <View style={styles.lunch}>
          <MaterialIcons name="restaurant" size={22} color={CampusColors.secondary} />
          <Text style={styles.lunchText}>LUNCH RECESS • 11:15 AM - 12:15 PM</Text>
        </View>

        <ClassCard
          start="12:30 PM"
          end="01:45 PM"
          subject="Science"
          subjectTone="blue"
          title="Organic Chemistry Lab"
          locationIcon="science"
          location="Lab 03 • North Campus"
          teacher="Prof. Sarah Jenkins"
        />

        <View style={styles.mapCard}>
          <Image source={{ uri: MAP_IMAGE }} style={styles.mapImg} contentFit="cover" />
          <View style={styles.mapOverlay}>
            <View style={styles.mapRow}>
              <Text style={styles.mapCaption} numberOfLines={2}>
                Current Location: Science Wing, Level 2
              </Text>
              <Pressable style={styles.mapBtn}>
                <MaterialIcons name="map" size={18} color={CampusColors.primary} />
                <Text style={styles.mapBtnText}>Open Map</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ClassCard({
  start,
  end,
  subject,
  subjectTone,
  title,
  location,
  locationIcon,
  teacher,
  menu,
  active,
}: {
  start: string;
  end: string;
  subject: string;
  subjectTone: 'blue' | 'orange';
  title: string;
  location: string;
  locationIcon: React.ComponentProps<typeof MaterialIcons>['name'];
  teacher: string;
  menu?: boolean;
  active?: boolean;
}) {
  const pillBg = subjectTone === 'blue' ? CampusColors.primaryFixed : CampusColors.tertiaryFixed;
  const pillText = subjectTone === 'blue' ? CampusColors.onPrimaryFixed : CampusColors.onTertiaryFixed;
  const lineColor = active ? CampusColors.primary : CampusColors.outlineVariant;

  return (
    <View style={[styles.classCard, active && styles.classCardActive]}>
      {active ? (
        <View style={styles.nowBadge}>
          <Text style={styles.nowBadgeText}>NOW</Text>
        </View>
      ) : null}
      <View style={styles.classInner}>
        <View style={styles.timeRail}>
          <Text style={[styles.timeRailText, active && { color: CampusColors.primary, fontFamily: CampusFonts.bodyBold }]}>
            {start}
          </Text>
          <View style={[styles.timeLine, { backgroundColor: lineColor }]} />
          <Text style={[styles.timeRailText, active && { color: CampusColors.primary, fontFamily: CampusFonts.bodyBold }]}>
            {end}
          </Text>
        </View>
        <View style={styles.classBody}>
          <View style={styles.classHead}>
            <View style={[styles.subjectPill, { backgroundColor: pillBg }]}>
              <Text style={[styles.subjectPillText, { color: pillText }]}>{subject}</Text>
            </View>
            {menu ? <MaterialIcons name="more-vert" size={22} color={CampusColors.onSurfaceVariant} /> : <View style={{ width: 22 }} />}
          </View>
          <Text style={styles.classTitle}>{title}</Text>
          <View style={styles.metaRow}>
            <MaterialIcons name={locationIcon} size={18} color={CampusColors.onSurfaceVariant} />
            <Text style={styles.metaText}>{location}</Text>
          </View>
          <View style={styles.metaRow}>
            <MaterialIcons name="person-outline" size={18} color={CampusColors.onSurfaceVariant} />
            <Text style={styles.metaText}>{teacher}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.background },
  scroll: { paddingHorizontal: CampusSpace.lg, paddingTop: CampusSpace.lg },
  pageTitle: { ...CampusType.h1, color: CampusColors.onSurface, marginBottom: 8 },
  subtitle: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginBottom: CampusSpace.lg },
  subtitleBold: { fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
  segment: {
    flexDirection: 'row',
    backgroundColor: CampusColors.surfaceContainerLow,
    borderRadius: CampusRadius.md,
    padding: 4,
    borderWidth: 1,
    borderColor: CampusColors.outlineVariant,
    marginBottom: CampusSpace.lg,
  },
  segmentBtn: { flex: 1, paddingVertical: 10, borderRadius: CampusRadius.sm, alignItems: 'center' },
  segmentBtnActive: { backgroundColor: CampusColors.primary, ...cardShadow },
  segmentLabel: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  segmentLabelActive: { color: CampusColors.onPrimary },
  currentDay: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.md,
    borderLeftWidth: 4,
    borderLeftColor: CampusColors.primary,
    marginBottom: CampusSpace.md,
    ...cardShadow,
  },
  currentDayLabel: { ...CampusType.label, color: CampusColors.primary, textTransform: 'uppercase' },
  currentDayName: { ...CampusType.h2, color: CampusColors.onSurface, marginTop: 4 },
  currentDayDate: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  classCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    marginBottom: CampusSpace.md,
    borderWidth: 1,
    borderColor: 'transparent',
    ...cardShadow,
    overflow: 'hidden',
  },
  classCardActive: { borderWidth: 2, borderColor: CampusColors.primary },
  nowBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: CampusColors.primary,
    paddingHorizontal: CampusSpace.md,
    paddingVertical: 6,
    borderBottomLeftRadius: CampusRadius.sm,
    zIndex: 2,
  },
  nowBadgeText: { ...CampusType.label, color: CampusColors.onPrimary, fontSize: 11 },
  classInner: { flexDirection: 'row', padding: CampusSpace.lg, gap: CampusSpace.lg, paddingTop: 20 },
  timeRail: { alignItems: 'center', minWidth: 88, paddingTop: 4 },
  timeRailText: { ...CampusType.label, color: CampusColors.onSurfaceVariant },
  timeLine: { width: 2, height: 40, marginVertical: CampusSpace.xs },
  classBody: { flex: 1 },
  classHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  subjectPill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: CampusRadius.full },
  subjectPillText: { ...CampusType.label, fontSize: 11 },
  classTitle: { ...CampusType.h2, color: CampusColors.onSurface, marginBottom: 8 },
  metaRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
  metaText: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant },
  lunch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: CampusSpace.md,
    padding: CampusSpace.md,
    borderRadius: CampusRadius.md,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: CampusColors.outlineVariant,
    backgroundColor: CampusColors.surfaceContainerLow,
    marginBottom: CampusSpace.md,
  },
  lunchText: {
    ...CampusType.label,
    color: CampusColors.secondary,
    letterSpacing: 1.2,
    flex: 1,
    textAlign: 'center',
  },
  mapCard: {
    height: 160,
    borderRadius: CampusRadius.md,
    overflow: 'hidden',
    marginTop: CampusSpace.sm,
    ...cardShadow,
  },
  mapImg: { ...StyleSheet.absoluteFillObject, opacity: 0.55 },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
    padding: CampusSpace.md,
  },
  mapRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  mapCaption: { flex: 1, ...CampusType.bodyMd, color: CampusColors.onPrimary, fontFamily: CampusFonts.bodyMedium },
  mapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: CampusColors.surfaceContainerLowest,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: CampusRadius.sm,
  },
  mapBtnText: { ...CampusType.label, color: CampusColors.primary },
});
