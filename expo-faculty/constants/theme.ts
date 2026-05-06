export const BrandColors = {
  surface: '#f9f9ff',
  background: '#f9f9ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f2f3fc',
  surfaceContainer: '#ecedf6',
  surfaceContainerHigh: '#e6e8f1',
  surfaceContainerHighest: '#e1e2eb',
  surfaceVariant: '#e1e2eb',
  onSurface: '#191c22',
  onSurfaceVariant: '#414753',
  outlineVariant: '#c1c6d5',
  outline: '#727784',

  primary: '#004e9f',
  primaryContainer: '#0066cc',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#dfe8ff',
  primaryFixed: '#d7e3ff',
  primaryFixedDim: '#aac7ff',
  onPrimaryFixedVariant: '#00458e',

  secondary: '#5f5e5e',
  secondaryContainer: '#e2dfde',
  onSecondaryFixedVariant: '#474746',

  tertiary: '#883700',
  tertiaryContainer: '#af4900',
  tertiaryFixed: '#ffdbcb',
  tertiaryFixedDim: '#ffb692',
  onTertiaryFixedVariant: '#793000',

  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',
} as const;

export const Spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  gutter: 20,
  container: 24,
} as const;

export const Radius = {
  sm: 12,
  md: 16,
  lg: 20,
  full: 999,
} as const;

export const Typography = {
  fontBody: 'Inter_400Regular',
  fontBodyMedium: 'Inter_500Medium',
  fontBodySemi: 'Inter_600SemiBold',
  fontHeading: 'WorkSans_700Bold',
  fontHeadingSemi: 'WorkSans_600SemiBold',

  h1: { fontSize: 24, lineHeight: 32, fontFamily: 'WorkSans_700Bold' },
  h2: { fontSize: 20, lineHeight: 28, fontFamily: 'WorkSans_600SemiBold' },
  bodyLg: { fontSize: 16, lineHeight: 24, fontFamily: 'Inter_500Medium' },
  bodyMd: { fontSize: 14, lineHeight: 20, fontFamily: 'Inter_400Regular' },
  caption: { fontSize: 12, lineHeight: 16, fontFamily: 'Inter_400Regular' },
  labelSm: { fontSize: 12, lineHeight: 16, fontFamily: 'Inter_600SemiBold' },
  stat: { fontSize: 28, lineHeight: 34, fontFamily: 'WorkSans_700Bold' },
} as const;

