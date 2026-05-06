import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { BrandColors, Radius, Spacing, Typography } from '@/constants/theme';

export default function GradingScreen() {
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');

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

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.h1}>Grading Overview</Text>
        <Text style={styles.sub}>
          Review submissions and provide academic feedback for active semesters.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statTop}>
              <View style={styles.statIcon}>
                <MaterialIcons name="pending-actions" size={22} color={BrandColors.primary} />
              </View>
              <View style={styles.priorityPill}>
                <Text style={styles.priorityText}>High Priority</Text>
              </View>
            </View>
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.caption}>Pending Submissions</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.rateRow}>
              <MaterialIcons name="trending-up" size={18} color={BrandColors.primary} />
              <Text style={styles.rateText}>88% Completion Rate</Text>
            </View>
            <Text style={styles.bodyMd}>
              Average grading speed increased by 12% this week.
            </Text>
          </View>
        </View>

        <View style={styles.worklist}>
          <View style={styles.worklistHead}>
            <Text style={styles.h2}>Recent Assignments</Text>
            <TouchableOpacity accessibilityRole="button">
              <Text style={styles.link}>View All</Text>
            </TouchableOpacity>
          </View>

          {[
            { title: 'Advanced Microeconomics - Quiz 3', meta: 'Due: Oct 24, 2023 • 25 Submissions', progress: 48, right: '12/25 Graded' },
            { title: 'Global Trade Systems - Case Study', meta: 'Due: Oct 22, 2023 • 40 Submissions', progress: 95, right: '38/40 Graded' },
            { title: 'Data Structures - Final Project Proposal', meta: 'Due: Oct 20, 2023 • 18 Submissions', progress: 0, right: '0/18 Graded' },
          ].map((a) => (
            <View key={a.title} style={styles.assignment}>
              <View style={styles.assignmentTop}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.bodyLgBold}>{a.title}</Text>
                  <Text style={styles.caption}>{a.meta}</Text>
                </View>
                <Text style={styles.link}>{a.right}</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${a.progress}%` }]} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.submission}>
          <View style={styles.submissionHead}>
            <View style={styles.studentRow}>
              <View style={styles.studentAvatarWrap}>
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb4adVTVA7kERJrU-yDFYnBxpz7c6_V7UhmDVK1n8a3Ah3DU6Ww9AOuIdGaiZ996igA3gbANoeKlElJcmFQ5dhlG8xrpfmg1bgiE1DVjf4-I4xhhTT34PAkQdzf6l8-RYeHVczan3l-j1_2VMaoRb6iqdmmIIgqIo6Jdh5jZDYBDSX5O5hnjy_soXTvYfR8mo0ZrNCIzHRAmlgZbyANUS3KcM2YD2-1GdOiYRl8p0NP7cU5Y6U_P2d6xwPrmzYZB6FSCga6_iEKjI',
                  }}
                  style={styles.studentAvatar}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.studentName}>Marcus Chen</Text>
                <Text style={styles.studentMeta}>ID: #STU-9921 • Advanced Microeconomics</Text>
              </View>
            </View>
            <View style={styles.navBtns}>
              <TouchableOpacity style={styles.navBtn} accessibilityRole="button">
                <MaterialIcons name="chevron-left" size={22} color={BrandColors.onPrimaryContainer} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navBtn} accessibilityRole="button">
                <MaterialIcons name="chevron-right" size={22} color={BrandColors.onPrimaryContainer} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.submissionBody}>
            <View style={styles.preview}>
              <MaterialIcons name="description" size={56} color={BrandColors.primary} />
              <Text style={styles.bodyLgBold}>Quiz_3_Submission_Chen.pdf</Text>
              <Text style={styles.caption}>Uploaded Oct 23, 11:45 PM</Text>
              <TouchableOpacity style={styles.previewBtn} accessibilityRole="button">
                <MaterialIcons name="open-in-new" size={18} color={BrandColors.primary} />
                <Text style={styles.previewBtnText}>Full Preview</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <Text style={styles.label}>Assignment Score</Text>
              <View style={styles.scoreRow}>
                <TextInput
                  value={score}
                  onChangeText={setScore}
                  keyboardType="number-pad"
                  placeholder="00"
                  placeholderTextColor={BrandColors.outline}
                  style={styles.scoreInput}
                />
                <Text style={styles.scoreMax}>/ 100</Text>
              </View>

              <Text style={[styles.label, { marginTop: Spacing.md }]}>Feedback &amp; Comments</Text>
              <TextInput
                value={feedback}
                onChangeText={setFeedback}
                placeholder="Provide constructive feedback for the student..."
                placeholderTextColor={BrandColors.outline}
                style={styles.textarea}
                multiline
              />

              <View style={styles.btnRow}>
                <TouchableOpacity style={styles.submitBtn} accessibilityRole="button">
                  <Text style={styles.submitText}>Submit Grade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.draftBtn} accessibilityRole="button">
                  <Text style={styles.draftText}>Save Draft</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.info}>
                <MaterialIcons name="info" size={18} color={BrandColors.primary} />
                <Text style={styles.infoText}>
                  The student will be notified once the grade is submitted.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  content: { padding: Spacing.container, paddingBottom: 120 },
  h1: { ...Typography.h1, color: BrandColors.onSurface },
  h2: { ...Typography.h2, color: BrandColors.onSurface },
  sub: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant, marginTop: 4, marginBottom: Spacing.lg },
  caption: { ...Typography.caption, color: BrandColors.onSurfaceVariant },
  bodyMd: { ...Typography.bodyMd, color: BrandColors.onSurfaceVariant },
  bodyLgBold: { ...Typography.bodyLg, color: BrandColors.onSurface, fontFamily: 'Inter_600SemiBold' },
  link: { ...Typography.labelSm, color: BrandColors.primary },
  statsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.gutter },
  statCard: {
    flex: 1,
    minWidth: 240,
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  statTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  statIcon: { backgroundColor: BrandColors.primaryFixed, padding: 8, borderRadius: 12 },
  priorityPill: { backgroundColor: BrandColors.errorContainer, paddingHorizontal: 10, paddingVertical: 4, borderRadius: Radius.full },
  priorityText: { ...Typography.labelSm, color: BrandColors.onErrorContainer },
  statValue: { ...Typography.stat, color: BrandColors.onSurface, marginTop: Spacing.md },
  rateRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 },
  rateText: { ...Typography.labelSm, color: BrandColors.primary },
  worklist: {
    marginTop: Spacing.lg,
    backgroundColor: BrandColors.surfaceContainerLowest,
    borderRadius: Radius.md,
    padding: Spacing.gutter,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  worklistHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Spacing.md },
  assignment: { borderWidth: 1, borderColor: BrandColors.outlineVariant, borderRadius: 12, padding: Spacing.md, marginTop: Spacing.md },
  assignmentTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: Spacing.md, marginBottom: 10 },
  progressTrack: { height: 8, borderRadius: Radius.full, backgroundColor: BrandColors.surfaceContainerHighest, overflow: 'hidden' },
  progressFill: { height: 8, borderRadius: Radius.full, backgroundColor: BrandColors.primary },
  submission: { marginTop: Spacing.lg, borderRadius: Radius.md, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(0,102,204,0.2)', backgroundColor: BrandColors.surfaceContainerLowest },
  submissionHead: {
    backgroundColor: BrandColors.primaryContainer,
    paddingHorizontal: Spacing.gutter,
    paddingVertical: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  studentRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md, flex: 1 },
  studentAvatarWrap: { width: 40, height: 40, borderRadius: Radius.full, overflow: 'hidden', borderWidth: 1, borderColor: BrandColors.outlineVariant, backgroundColor: BrandColors.surface },
  studentAvatar: { width: 40, height: 40 },
  studentName: { ...Typography.bodyLg, color: BrandColors.onPrimaryContainer },
  studentMeta: { ...Typography.caption, color: BrandColors.onPrimaryContainer, opacity: 0.9 },
  navBtns: { flexDirection: 'row', gap: 6 },
  navBtn: { padding: 8, borderRadius: 12 },
  submissionBody: { padding: Spacing.gutter, gap: Spacing.gutter },
  preview: {
    backgroundColor: BrandColors.surfaceContainerLow,
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: 12,
    padding: Spacing.xl,
    alignItems: 'center',
    gap: 8,
  },
  previewBtn: { marginTop: Spacing.md, flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: BrandColors.outline },
  previewBtnText: { ...Typography.labelSm, color: BrandColors.primary },
  form: { gap: 6 },
  label: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant, marginBottom: 6 },
  scoreRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  scoreInput: {
    width: 90,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: 12,
    padding: 12,
    textAlign: 'center',
    ...Typography.h2,
    color: BrandColors.onSurface,
  },
  scoreMax: { ...Typography.h2, color: BrandColors.outlineVariant },
  textarea: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: BrandColors.outlineVariant,
    borderRadius: 12,
    padding: 12,
    minHeight: 140,
    textAlignVertical: 'top',
    ...Typography.bodyMd,
    color: BrandColors.onSurface,
  },
  btnRow: { flexDirection: 'row', gap: Spacing.md, marginTop: Spacing.md },
  submitBtn: { flex: 1, backgroundColor: BrandColors.primary, borderRadius: Radius.md, paddingVertical: 12, alignItems: 'center' },
  submitText: { ...Typography.labelSm, color: BrandColors.onPrimary },
  draftBtn: { paddingHorizontal: 16, borderRadius: Radius.md, borderWidth: 1, borderColor: BrandColors.outline, justifyContent: 'center' },
  draftText: { ...Typography.labelSm, color: BrandColors.onSurfaceVariant },
  info: { marginTop: Spacing.md, flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: BrandColors.surfaceContainerHigh, padding: 12, borderRadius: 12 },
  infoText: { ...Typography.caption, color: BrandColors.onSurfaceVariant, flex: 1 },
});

