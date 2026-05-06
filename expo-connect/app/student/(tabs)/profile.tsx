import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StudentTopBar } from '@/components/student/StudentTopBar';
import { useAuth } from '@/context/AuthContext';
import { CampusColors, CampusFonts, CampusRadius, CampusSpace, CampusType } from '@/constants/theme';

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAlGBG-fw6nR2j-FdgLJSn-micDBWXIm2H1KSkrXPWIc7WSY2tHYUS6KkSg4y9NCfgYnvwWx1OOh7wgEh6C37Euqnf3EHGIhh03AIaSVNfzY6tBzv20-l8tIiXx0keHprxKz4IELL7zJn2UZQLxro4JW7QNdKxa1Tq5OCEkzH-Q27OkaEZ2fBb1yHowtJDS4ypUKPy_BhhIvy-CcQBCASq4Bvyf4tJ9W7mNqvB5Vg08Z1RJAIDL0Lqgp0e9c2oqSBmFikwXqe9KtYM';

export default function StudentProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <View style={styles.screen}>
      <StudentTopBar avatarUri={AVATAR} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <View style={styles.identityCard}>
          <View style={styles.identityRow}>
            <View style={styles.photoWrap}>
              <Image source={{ uri: AVATAR }} style={styles.photo} contentFit="cover" />
              <View style={styles.statusDot} />
            </View>

            <View style={{ flex: 1 }}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>Arjun Vardhan</Text>
                <View style={styles.activePill}>
                  <Text style={styles.activeText}>Active Student</Text>
                </View>
              </View>
              <Text style={styles.meta}>Student ID: CC-2024-8902</Text>

              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <MaterialIcons name="domain" size={18} color={CampusColors.primary} />
                  <Text style={styles.badgeText}>Section: Grade 12-B</Text>
                </View>
                <View style={styles.badge}>
                  <MaterialIcons name="local-offer" size={18} color={CampusColors.primary} />
                  <Text style={styles.badgeText}>Roll No: 24</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={styles.primaryBtn} onPress={() => Alert.alert('Edit Profile', 'Edit profile flow coming next.')}>
              <MaterialIcons name="edit" size={18} color={CampusColors.onPrimary} />
              <Text style={styles.primaryBtnText}>Edit Profile</Text>
            </Pressable>
            <Pressable style={styles.outlineBtn} onPress={() => Alert.alert('Print ID', 'Student ID print queued.')}>
              <MaterialIcons name="print" size={18} color={CampusColors.onSurfaceVariant} />
              <Text style={styles.outlineBtnText}>Print ID</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.academicCard}>
          <Text style={styles.academicKicker}>ACADEMIC PERFORMANCE</Text>
          <Text style={styles.academicValue}>3.82 GPA</Text>
          <View style={styles.academicTrack}>
            <View style={[styles.academicFill, { width: '88%' }]} />
          </View>
          <Text style={styles.academicSub}>92nd Percentile in Section</Text>
        </View>

        <View style={styles.gridGap}>
          <SectionCard title="Personal Information" icon="person-outline">
            <TwoCol labelLeft="Date of Birth" valueLeft="14th March 2006" labelRight="Blood Group" valueRight="O Positive (O+)" />
            <TwoCol labelLeft="Gender" valueLeft="Male" labelRight="Nationality" valueRight="Indian" />
            <OneCol
              label="Residential Address"
              value="Skyline Residency, Apt 402, Brigade Road, Bangalore, 560001"
            />
          </SectionCard>

          <SectionCard title="Academic Track" icon="school">
            <View style={styles.rowCard}>
              <View style={styles.rowCardLeft}>
                <View style={[styles.rowIcon, { backgroundColor: 'rgba(0, 78, 159, 0.1)' }]}>
                  <MaterialIcons name="science" size={20} color={CampusColors.primary} />
                </View>
                <View>
                  <Text style={styles.rowTitle}>Science Stream</Text>
                  <Text style={styles.rowSub}>PCMB Specialization</Text>
                </View>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>2024-25</Text>
              </View>
            </View>

            <View style={styles.rowCardOutline}>
              <View style={styles.rowCardLeft}>
                <View style={[styles.rowIcon, { backgroundColor: 'rgba(226, 223, 222, 0.6)' }]}>
                  <MaterialIcons name="history-edu" size={20} color={CampusColors.secondary} />
                </View>
                <View>
                  <Text style={styles.rowTitle}>Attendance Rate</Text>
                  <Text style={styles.rowSub}>Present: 142/150 days</Text>
                </View>
              </View>
              <Text style={styles.rowRightValue}>94.6%</Text>
            </View>
          </SectionCard>
        </View>

        <SectionCard title="Parent/Guardian Info" icon="family-restroom">
          <View style={styles.guardianBlockPrimary}>
            <Text style={styles.guardianKickerPrimary}>PRIMARY CONTACT</Text>
            <KeyValueRow k="Name" v="Ramesh Vardhan" bold />
            <KeyValueRow k="Relation" v="Father" />
            <KeyValueRow k="Occupation" v="Software Engineer" />
            <View style={styles.guardianLinks}>
              <Pressable style={styles.linkRow} onPress={() => Linking.openURL('tel:+919880012345')}>
                <MaterialIcons name="call" size={18} color={CampusColors.primary} />
                <Text style={styles.linkText}>+91 98800 12345</Text>
              </Pressable>
              <Pressable style={styles.linkRow} onPress={() => Linking.openURL('mailto:r.vardhan@email.com')}>
                <MaterialIcons name="mail" size={18} color={CampusColors.primary} />
                <Text style={styles.linkText}>r.vardhan@email.com</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.guardianBlockSecondary}>
            <Text style={styles.guardianKickerSecondary}>SECONDARY CONTACT</Text>
            <KeyValueRow k="Name" v="Sunita Vardhan" bold />
            <KeyValueRow k="Relation" v="Mother" />
            <KeyValueRow k="Phone" v="+91 98800 67890" />
          </View>

          <View style={styles.emergencyCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <MaterialIcons name="warning" size={18} color={CampusColors.tertiary} />
              <Text style={styles.emergencyTitle}>EMERGENCY PROCEDURE</Text>
            </View>
            <Text style={styles.emergencyText}>
              In case of emergency, contact Ramesh Vardhan immediately. Allergic to Peanuts.
            </Text>
          </View>
        </SectionCard>

        <Pressable
          style={styles.signOutBtn}
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

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  children: React.ReactNode;
}) {
  return (
    <View style={styles.sectionCard}>
      <View style={styles.sectionHead}>
        <MaterialIcons name={icon} size={20} color={CampusColors.primary} />
        <Text style={styles.h2}>{title}</Text>
      </View>
      <View style={{ gap: 14 }}>{children}</View>
    </View>
  );
}

function TwoCol({
  labelLeft,
  valueLeft,
  labelRight,
  valueRight,
}: {
  labelLeft: string;
  valueLeft: string;
  labelRight: string;
  valueRight: string;
}) {
  return (
    <View style={{ flexDirection: 'row', gap: 14 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.caption}>{labelLeft}</Text>
        <Text style={styles.bodyMd}>{valueLeft}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.caption}>{labelRight}</Text>
        <Text style={styles.bodyMd}>{valueRight}</Text>
      </View>
    </View>
  );
}

function OneCol({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text style={styles.caption}>{label}</Text>
      <Text style={styles.bodyMd}>{value}</Text>
    </View>
  );
}

function KeyValueRow({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <View style={styles.kvRow}>
      <Text style={styles.kvKey}>{k}</Text>
      <Text style={[styles.kvVal, bold && { fontFamily: CampusFonts.bodyBold }]}>{v}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: CampusSpace.md, paddingTop: CampusSpace.md },
  gridGap: { gap: CampusSpace.gutter },

  identityCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.md,
    borderWidth: 1,
    borderColor: CampusColors.surfaceContainer,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  identityRow: { flexDirection: 'row', gap: CampusSpace.md, alignItems: 'flex-start' },
  photoWrap: { position: 'relative' },
  photo: { width: 84, height: 84, borderRadius: CampusRadius.md, backgroundColor: CampusColors.surfaceContainerHigh, borderWidth: 3, borderColor: CampusColors.surfaceContainer, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10, shadowOffset: { width: 0, height: 2 } },
  statusDot: { position: 'absolute', right: -6, bottom: -6, width: 18, height: 18, borderRadius: 9, backgroundColor: '#22c55e', borderWidth: 3, borderColor: CampusColors.surfaceContainerLowest },
  nameRow: { flexDirection: 'row', alignItems: 'flex-end', flexWrap: 'wrap', gap: 10 },
  name: { ...CampusType.h2, color: CampusColors.onSurface, fontFamily: CampusFonts.headingBold },
  activePill: { backgroundColor: CampusColors.primaryContainer, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  activeText: { ...CampusType.label, color: CampusColors.onPrimaryContainer },
  meta: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 6 },
  badgeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 12 },
  badge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: CampusColors.surfaceContainer, paddingHorizontal: 12, paddingVertical: 10, borderRadius: CampusRadius.sm },
  badgeText: { ...CampusType.label, color: CampusColors.onSurface },
  actionsRow: { flexDirection: 'row', gap: 10, marginTop: CampusSpace.md },
  primaryBtn: { flex: 1, backgroundColor: CampusColors.primary, borderRadius: CampusRadius.sm, paddingVertical: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 },
  primaryBtnText: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodySemiBold, color: CampusColors.onPrimary },
  outlineBtn: { flex: 1, borderWidth: 1, borderColor: CampusColors.outline, borderRadius: CampusRadius.sm, paddingVertical: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 },
  outlineBtnText: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodySemiBold, color: CampusColors.onSurfaceVariant },

  academicCard: {
    marginTop: CampusSpace.gutter,
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.lg,
    overflow: 'hidden',
  },
  academicKicker: { ...CampusType.label, color: 'rgba(255,255,255,0.85)', letterSpacing: 1 },
  academicValue: { ...CampusType.h1, color: CampusColors.onPrimary, marginTop: 8, fontFamily: CampusFonts.headingBold },
  academicTrack: { height: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.2)', marginTop: 14, overflow: 'hidden' },
  academicFill: { height: '100%', backgroundColor: '#fff' },
  academicSub: { ...CampusType.caption, color: 'rgba(255,255,255,0.8)', marginTop: 8 },

  sectionCard: {
    marginTop: CampusSpace.gutter,
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: CampusSpace.md,
    borderWidth: 1,
    borderColor: CampusColors.surfaceContainer,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  sectionHead: { flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: CampusColors.surfaceVariant, paddingBottom: 10, marginBottom: 14 },
  h2: { ...CampusType.bodyLg, color: CampusColors.onSurface, fontFamily: CampusFonts.headingBold },
  caption: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginBottom: 6 },
  bodyMd: { ...CampusType.bodyMd, color: CampusColors.onSurface },

  rowCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: CampusSpace.md, borderRadius: CampusRadius.sm, backgroundColor: CampusColors.surfaceContainerLow },
  rowCardOutline: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: CampusSpace.md, borderRadius: CampusRadius.sm, borderWidth: 1, borderColor: CampusColors.outlineVariant },
  rowCardLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowIcon: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  rowTitle: { ...CampusType.bodyMd, fontFamily: CampusFonts.bodyBold, color: CampusColors.onSurface },
  rowSub: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  tag: { backgroundColor: 'rgba(0, 102, 204, 0.2)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  tagText: { ...CampusType.label, color: CampusColors.primary },
  rowRightValue: { ...CampusType.h2, color: CampusColors.primary },

  guardianBlockPrimary: { borderLeftWidth: 4, borderLeftColor: CampusColors.primary, paddingLeft: 12, gap: 10 },
  guardianKickerPrimary: { ...CampusType.caption, color: CampusColors.onTertiaryFixedVariant, fontFamily: CampusFonts.bodyBold, letterSpacing: 1 },
  guardianLinks: { borderTopWidth: 1, borderTopColor: CampusColors.surfaceVariant, paddingTop: 10, gap: 6, marginTop: 6 },
  linkRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, paddingHorizontal: 8, borderRadius: CampusRadius.sm },
  linkText: { ...CampusType.bodyMd, color: CampusColors.primary, fontFamily: CampusFonts.bodySemiBold },

  guardianBlockSecondary: { marginTop: 18, borderLeftWidth: 4, borderLeftColor: CampusColors.outlineVariant, paddingLeft: 12, gap: 10 },
  guardianKickerSecondary: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, fontFamily: CampusFonts.bodyBold, letterSpacing: 1 },
  kvRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  kvKey: { ...CampusType.bodyMd, color: CampusColors.onSurfaceVariant },
  kvVal: { ...CampusType.bodyMd, color: CampusColors.onSurface },

  emergencyCard: { marginTop: 18, backgroundColor: 'rgba(255, 219, 203, 0.35)', borderRadius: CampusRadius.md, padding: CampusSpace.md },
  emergencyTitle: { ...CampusType.label, color: CampusColors.tertiary, fontFamily: CampusFonts.bodyBold, letterSpacing: 0.8 },
  emergencyText: { ...CampusType.caption, color: CampusColors.onSurfaceVariant, marginTop: 8 },

  signOutBtn: { alignItems: 'center', paddingVertical: 16, marginTop: CampusSpace.gutter },
  signOutText: { ...CampusType.label, color: CampusColors.primary },
});

