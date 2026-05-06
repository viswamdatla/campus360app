import { MaterialIcons } from '@expo/vector-icons';
import type { Href } from 'expo-router';
import { Redirect, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuth, type UserRole } from '@/context/AuthContext';
import { CampusFonts, CampusRadius, CampusSpace, CampusType, Connect } from '@/constants/theme';

const connectBlue = Connect.brandBlue;
const pageBg = Connect.canvas;

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { session, hydrated, signIn } = useAuth();
  const [role, setRole] = useState<UserRole>('student');
  const [institutionalId, setInstitutionalId] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  if (!hydrated) {
    return <View style={[styles.screen, { backgroundColor: pageBg }]} />;
  }

  if (session) {
    return <Redirect href={`/${session.role}` as Href} />;
  }

  const onSignIn = async () => {
    const id = institutionalId.trim();
    if (!id || !password.trim()) {
      Alert.alert('Missing fields', 'Please enter your institutional ID and password.');
      return;
    }
    await signIn(role);
    router.replace(`/${role}` as Href);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.screen, { backgroundColor: pageBg }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 24 }]}>
        <View style={styles.topBrand}>
          <MaterialIcons name="account-balance" size={26} color={connectBlue} />
          <Text style={styles.topBrandText}>Campus Connect</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.segment}>
            {(['student', 'faculty', 'parent'] as const).map((r) => {
              const active = role === r;
              return (
                <Pressable
                  key={r}
                  onPress={() => setRole(r)}
                  style={[styles.segmentItem, active && styles.segmentItemActive]}>
                  <Text style={[styles.segmentLabel, active && styles.segmentLabelActive]}>
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.welcomeSub}>Please enter your credentials to access the portal</Text>

          <Text style={styles.fieldLabel}>Institutional ID</Text>
          <View style={styles.inputWrap}>
            <MaterialIcons name="badge" size={20} color="#8b8fa3" style={styles.inputIcon} />
            <TextInput
              value={institutionalId}
              onChangeText={setInstitutionalId}
              placeholder="e.g. STU-123456"
              placeholderTextColor="#8b8fa3"
              autoCapitalize="characters"
              style={styles.input}
            />
          </View>

          <Text style={[styles.fieldLabel, { marginTop: 16 }]}>Password</Text>
          <View style={styles.inputWrap}>
            <MaterialIcons name="lock-outline" size={20} color="#8b8fa3" style={styles.inputIcon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#8b8fa3"
              secureTextEntry
              style={styles.input}
            />
          </View>

          <Pressable style={styles.forgotWrap} onPress={() => Alert.alert('Reset password', 'Contact your administrator.')}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </Pressable>

          <Pressable
            style={styles.rememberRow}
            onPress={() => setRemember(!remember)}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: remember }}>
            <View style={[styles.checkbox, remember && styles.checkboxOn]}>
              {remember ? <MaterialIcons name="check" size={16} color="#fff" /> : null}
            </View>
            <Text style={styles.rememberText}>Remember device for 30 days</Text>
          </Pressable>

          <Pressable style={styles.primaryBtn} onPress={onSignIn}>
            <Text style={styles.primaryBtnText}>Sign In</Text>
          </Pressable>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Secure Identity Verification</Text>
            <View style={styles.dividerLine} />
          </View>

          <Pressable
            style={styles.ssoBtn}
            onPress={() => Alert.alert('Single Sign-On', 'SSO would open your institution identity provider.')}>
            <MaterialIcons name="vpn-key" size={20} color={connectBlue} />
            <Text style={styles.ssoText}>Single Sign-On</Text>
          </Pressable>
        </View>

        <Text style={styles.footerBrand}>Campus Connect</Text>
        <Text style={styles.copy}>© 2024 Institutional Intelligence Systems. All rights reserved.</Text>
        <View style={styles.links}>
          <Pressable onPress={() => Alert.alert('Privacy Policy')}>
            <Text style={styles.link}>Privacy Policy</Text>
          </Pressable>
          <Text style={styles.linkSep}>·</Text>
          <Pressable onPress={() => Alert.alert('Terms of Service')}>
            <Text style={styles.link}>Terms of Service</Text>
          </Pressable>
          <Text style={styles.linkSep}>·</Text>
          <Pressable onPress={() => Alert.alert('Support')}>
            <Text style={styles.link}>Support</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  scroll: { paddingHorizontal: CampusSpace.lg },
  topBrand: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 },
  topBrandText: { fontSize: 18, fontFamily: CampusFonts.headingBold, color: connectBlue },
  card: {
    backgroundColor: '#fff',
    borderRadius: CampusRadius.lg,
    padding: CampusSpace.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  segment: {
    flexDirection: 'row',
    backgroundColor: '#eceef5',
    borderRadius: CampusRadius.full,
    padding: 4,
    marginBottom: CampusSpace.lg,
  },
  segmentItem: { flex: 1, paddingVertical: 10, borderRadius: CampusRadius.full, alignItems: 'center' },
  segmentItemActive: { backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, elevation: 2 },
  segmentLabel: { ...CampusType.label, color: '#5c6070', textTransform: 'capitalize' },
  segmentLabelActive: { color: connectBlue },
  welcome: { fontSize: 22, fontFamily: CampusFonts.headingBold, color: '#191c22', marginBottom: 6 },
  welcomeSub: { ...CampusType.bodyMd, color: '#727784', marginBottom: CampusSpace.lg },
  fieldLabel: { ...CampusType.label, color: '#414753', marginBottom: 8 },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d8dae6',
    borderRadius: CampusRadius.sm,
    backgroundColor: '#fafbff',
  },
  inputIcon: { marginLeft: 12 },
  input: { flex: 1, paddingVertical: 14, paddingHorizontal: 10, fontSize: 15, fontFamily: CampusFonts.body, color: '#191c22' },
  forgotWrap: { alignSelf: 'flex-end', marginTop: 10 },
  forgot: { ...CampusType.bodyMd, color: connectBlue, fontFamily: CampusFonts.bodySemiBold },
  rememberRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 18 },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#c1c6d5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: { backgroundColor: connectBlue, borderColor: connectBlue },
  rememberText: { ...CampusType.bodyMd, color: '#414753', flex: 1 },
  primaryBtn: {
    backgroundColor: connectBlue,
    borderRadius: CampusRadius.md,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: CampusSpace.lg,
  },
  primaryBtnText: { fontSize: 16, fontFamily: CampusFonts.bodyBold, color: '#fff' },
  dividerRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: CampusSpace.lg },
  dividerLine: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: '#d8dae6' },
  dividerText: { fontSize: 11, color: '#8b8fa3', fontFamily: CampusFonts.body },
  ssoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#d8dae6',
    borderRadius: CampusRadius.md,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  ssoText: { fontSize: 15, fontFamily: CampusFonts.bodySemiBold, color: connectBlue },
  footerBrand: { textAlign: 'center', fontFamily: CampusFonts.headingBold, color: connectBlue, fontSize: 16, marginTop: CampusSpace.xl },
  copy: { ...CampusType.caption, color: '#5c6070', textAlign: 'center', marginTop: 8, paddingHorizontal: 12 },
  links: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 14, flexWrap: 'wrap' },
  link: { ...CampusType.caption, color: connectBlue, fontFamily: CampusFonts.bodySemiBold },
  linkSep: { marginHorizontal: 8, color: '#8b8fa3' },
});
