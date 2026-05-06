import { Redirect, Slot } from 'expo-router';

import { useAuth } from '@/context/AuthContext';

export default function FacultyLayout() {
  const { session, hydrated } = useAuth();

  if (!hydrated) return null;
  if (!session || session.role !== 'faculty') return <Redirect href="/" />;

  return <Slot />;
}
