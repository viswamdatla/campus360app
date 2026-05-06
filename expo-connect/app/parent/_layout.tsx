import { Redirect, Slot } from 'expo-router';

import { useAuth } from '@/context/AuthContext';

export default function ParentLayout() {
  const { session, hydrated } = useAuth();

  if (!hydrated) return null;
  if (!session || session.role !== 'parent') return <Redirect href="/" />;

  return <Slot />;
}
