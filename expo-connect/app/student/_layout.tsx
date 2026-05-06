import { Redirect, Slot } from 'expo-router';

import { useAuth } from '@/context/AuthContext';

export default function StudentLayout() {
  const { session, hydrated } = useAuth();

  if (!hydrated) return null;
  if (!session || session.role !== 'student') return <Redirect href="/" />;

  return <Slot />;
}
