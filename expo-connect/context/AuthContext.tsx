import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = '@campus_connect/session';

export type UserRole = 'student' | 'faculty' | 'parent';

type Session = {
  role: UserRole;
};

let memorySession: string | null = null;

async function safeGetItem(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return memorySession;
  }
}

async function safeSetItem(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    memorySession = value;
  }
}

async function safeRemoveItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    memorySession = null;
  }
}

type AuthContextValue = {
  session: Session | null;
  hydrated: boolean;
  signIn: (role: UserRole) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const raw = await safeGetItem(STORAGE_KEY);
        if (cancelled) return;
        if (raw) {
          const parsed = JSON.parse(raw) as Session;
          if (parsed?.role === 'student' || parsed?.role === 'faculty' || parsed?.role === 'parent') {
            setSession(parsed);
          }
        }
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const signIn = useCallback(async (role: UserRole) => {
    const next: Session = { role };
    await safeSetItem(STORAGE_KEY, JSON.stringify(next));
    setSession(next);
  }, []);

  const signOut = useCallback(async () => {
    await safeRemoveItem(STORAGE_KEY);
    setSession(null);
  }, []);

  const value = useMemo(
    () => ({ session, hydrated, signIn, signOut }),
    [session, hydrated, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
