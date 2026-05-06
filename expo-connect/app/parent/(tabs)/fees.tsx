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
  ParentSpace,
  ParentType,
  cardShadow,
} from '@/constants/theme';

const PAYMENTS = [
  { date: 'Oct 12, 2023', title: 'Tuition Installment - Oct', method: 'Online Payment (VISA)', amount: '$1,200.00' },
  { date: 'Sep 10, 2023', title: 'Lab Fees', method: 'ACH Transfer', amount: '$150.00' },
  { date: 'Aug 15, 2023', title: 'Tuition Installment - Aug', method: 'Online Payment (MC)', amount: '$1,200.00' },
  { date: 'Jul 12, 2023', title: 'Sports Program', method: 'Online Payment (VISA)', amount: '$350.00' },
];

export default function FeesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <AppHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: insets.bottom + 100 }]}>
        <Text style={styles.pageTitle}>Financial Overview</Text>
        <Text style={styles.subtitle}>View and manage your tuition fees and academic expenses.</Text>

        <View style={styles.whiteCard}>
          <View style={styles.cardTopRow}>
            <View>
              <Text style={styles.cardKicker}>TOTAL FEES</Text>
              <Text style={styles.cardAmount}>$12,450.00</Text>
              <Text style={styles.cardFoot}>Academic Year 2023-24</Text>
            </View>
            <View style={[styles.smallIcon, { backgroundColor: CampusColors.primaryFixed }]}>
              <MaterialIcons name="account-balance" size={20} color={CampusColors.onPrimaryFixedVariant} />
            </View>
          </View>
        </View>

        <View style={styles.whiteCard}>
          <View style={styles.cardTopRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardKicker}>AMOUNT PAID</Text>
              <Text style={styles.cardAmount}>$9,200.00</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: '74%' }]} />
              </View>
              <Text style={styles.progressPct}>74%</Text>
            </View>
            <View style={[styles.smallIcon, { backgroundColor: 'rgba(13, 148, 136, 0.15)' }]}>
              <MaterialIcons name="check-circle" size={20} color={CampusColors.successGreen} />
            </View>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceTop}>
            <View>
              <Text style={styles.balanceKicker}>OUTSTANDING BALANCE</Text>
              <Text style={styles.balanceAmt}>$3,250.00</Text>
            </View>
            <MaterialIcons name="assignment" size={28} color="rgba(255,255,255,0.35)" />
          </View>
          <Pressable style={styles.payBtn}>
            <Text style={styles.payBtnText}>Pay Now</Text>
            <MaterialIcons name="credit-card" size={20} color={CampusColors.primary} />
          </Pressable>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          <Pressable>
            <Text style={styles.link}>Download Statements</Text>
          </Pressable>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHead}>
            <Text style={[styles.th, { flex: 0.28 }]}>DATE</Text>
            <Text style={[styles.th, { flex: 0.44 }]}>DESCRIPTION</Text>
            <Text style={[styles.th, { flex: 0.28, textAlign: 'right' }]}>AMOUNT</Text>
          </View>
          {PAYMENTS.map((p, i) => (
            <View key={p.date + p.title} style={[styles.tr, i < PAYMENTS.length - 1 && styles.trBorder]}>
              <Text style={[styles.td, { flex: 0.28 }]}>{p.date}</Text>
              <View style={{ flex: 0.44, paddingRight: 6 }}>
                <Text style={styles.tdTitle}>{p.title}</Text>
                <Text style={styles.tdSub}>{p.method}</Text>
              </View>
              <Text style={[styles.tdAmt, { flex: 0.28 }]}>{p.amount}</Text>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { marginTop: ParentSpace.md }]}>Upcoming Dues</Text>
        <DueRow
          icon="event"
          iconBg={CampusColors.primaryFixed}
          title="Tuition Installment - Nov"
          due="Due Nov 12, 2023"
          amount="$1,200.00"
        />
        <DueRow
          icon="sports-soccer"
          iconBg={CampusColors.tertiaryFixed}
          title="Winter Sports Fee"
          due="Due Nov 28, 2023"
          amount="$275.00"
        />

        <View style={styles.help}>
          <Text style={styles.helpKicker}>NEED HELP?</Text>
          <Text style={styles.helpText}>Have questions regarding fee structure or payment modes?</Text>
          <Pressable style={styles.helpBtn}>
            <MaterialIcons name="help-outline" size={20} color={CampusColors.primary} />
            <Text style={styles.helpBtnText}>Contact Accounts</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

function DueRow({
  icon,
  iconBg,
  title,
  due,
  amount,
}: {
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  iconBg: string;
  title: string;
  due: string;
  amount: string;
}) {
  return (
    <View style={styles.dueCard}>
      <View style={[styles.dueIcon, { backgroundColor: iconBg }]}>
        <MaterialIcons name={icon} size={22} color={CampusColors.onPrimaryFixedVariant} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.dueTitle}>{title}</Text>
        <Text style={styles.dueSub}>{due}</Text>
      </View>
      <Text style={styles.dueAmt}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: CampusColors.surface },
  scroll: { paddingHorizontal: ParentSpace.md, paddingTop: ParentSpace.md },
  pageTitle: { ...ParentType.h1, color: CampusColors.onSurface },
  subtitle: { ...ParentType.bodyMd, color: CampusColors.onSurfaceVariant, marginTop: 6, marginBottom: ParentSpace.md },
  whiteCard: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: CampusSpace.md,
    ...cardShadow,
  },
  cardTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardKicker: { ...ParentType.label, color: CampusColors.onSurfaceVariant, letterSpacing: 0.8 },
  cardAmount: { ...ParentType.stat, color: CampusColors.onSurface, marginTop: 6 },
  cardFoot: { ...ParentType.caption, color: CampusColors.onSurfaceVariant, marginTop: 8 },
  smallIcon: { width: 40, height: 40, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: CampusColors.surfaceContainerHigh,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: CampusColors.successGreen, borderRadius: 4 },
  progressPct: { ...ParentType.label, color: CampusColors.onSurfaceVariant, marginTop: 6, textAlign: 'right' },
  balanceCard: {
    backgroundColor: CampusColors.primary,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: ParentSpace.lg,
    ...cardShadow,
  },
  balanceTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  balanceKicker: { ...ParentType.label, color: 'rgba(255,255,255,0.85)', letterSpacing: 0.8 },
  balanceAmt: { ...ParentType.stat, color: CampusColors.onPrimary, marginTop: 6 },
  payBtn: {
    marginTop: ParentSpace.md,
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  payBtnText: { ...ParentType.bodyMd, fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: ParentSpace.md },
  sectionTitle: { ...ParentType.h2, color: CampusColors.onSurface },
  link: { ...ParentType.label, color: CampusColors.primary },
  table: {
    backgroundColor: CampusColors.surfaceContainerLowest,
    borderRadius: CampusRadius.md,
    overflow: 'hidden',
    ...cardShadow,
  },
  tableHead: {
    flexDirection: 'row',
    backgroundColor: CampusColors.primaryFixed,
    paddingVertical: 12,
    paddingHorizontal: ParentSpace.md,
  },
  th: { ...ParentType.label, color: CampusColors.onPrimaryFixedVariant, fontSize: 10 },
  tr: { flexDirection: 'row', paddingHorizontal: ParentSpace.md, paddingVertical: 12, alignItems: 'flex-start' },
  trBorder: { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: CampusColors.outlineVariant },
  td: { ...ParentType.caption, color: CampusColors.onSurface, fontSize: 12 },
  tdTitle: { fontFamily: CampusFonts.bodyBold, fontSize: 13, color: CampusColors.onSurface },
  tdSub: { ...ParentType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  tdAmt: { fontFamily: CampusFonts.bodyBold, fontSize: 13, color: CampusColors.onSurface, textAlign: 'right' },
  dueCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: CampusColors.outlineVariant,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginBottom: ParentSpace.md,
    backgroundColor: CampusColors.surfaceContainerLowest,
  },
  dueIcon: { width: 44, height: 44, borderRadius: CampusRadius.sm, alignItems: 'center', justifyContent: 'center' },
  dueTitle: { fontFamily: CampusFonts.bodyBold, fontSize: 15, color: CampusColors.onSurface },
  dueSub: { ...ParentType.caption, color: CampusColors.onSurfaceVariant, marginTop: 2 },
  dueAmt: { fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
  help: {
    backgroundColor: CampusColors.surfaceContainerLow,
    borderRadius: CampusRadius.md,
    padding: ParentSpace.md,
    marginTop: ParentSpace.md,
    marginBottom: ParentSpace.lg,
  },
  helpKicker: { ...ParentType.label, color: CampusColors.onSurfaceVariant, letterSpacing: 0.8 },
  helpText: { ...ParentType.bodyMd, color: CampusColors.onSurface, marginTop: 8 },
  helpBtn: {
    marginTop: ParentSpace.md,
    borderWidth: 1,
    borderColor: CampusColors.primary,
    backgroundColor: CampusColors.primaryFixed,
    borderRadius: CampusRadius.md,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  helpBtnText: { ...ParentType.bodyMd, fontFamily: CampusFonts.bodyBold, color: CampusColors.primary },
});
