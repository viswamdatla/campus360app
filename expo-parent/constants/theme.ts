/** Campus Parent design tokens (aligned with provided Tailwind / M3 palette) */
export const CampusColors = {
  background: '#f9f9ff',
  surface: '#f9f9ff',
  surfaceBright: '#f9f9ff',
  surfaceContainer: '#ecedf6',
  surfaceContainerLow: '#f2f3fc',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerHigh: '#e6e8f1',
  surfaceContainerHighest: '#e1e2eb',
  surfaceVariant: '#e1e2eb',
  onSurface: '#191c22',
  onSurfaceVariant: '#414753',
  outline: '#727784',
  outlineVariant: '#c1c6d5',
  primary: '#004e9f',
  onPrimary: '#ffffff',
  primaryContainer: '#0066cc',
  onPrimaryContainer: '#dfe8ff',
  primaryFixed: '#d7e3ff',
  onPrimaryFixed: '#001b3e',
  onPrimaryFixedVariant: '#00458e',
  inversePrimary: '#aac7ff',
  tertiary: '#883700',
  tertiaryFixed: '#ffdbcb',
  onTertiaryFixed: '#341100',
  onTertiaryFixedVariant: '#793000',
  secondary: '#5f5e5e',
  secondaryContainer: '#e2dfde',
  onSecondaryContainer: '#636262',
  onSecondaryFixedVariant: '#474746',
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',
  onError: '#ffffff',
  successGreen: '#0d9488',
} as const;

export const CampusFonts = {
  /** Inter */
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
  /** Work Sans */
  headingSemi: 'WorkSans_600SemiBold',
  headingBold: 'WorkSans_700Bold',
  headingExtra: 'WorkSans_800ExtraBold',
} as const;

export const CampusType = {
  h1: { fontSize: 24, lineHeight: 32, fontFamily: CampusFonts.headingSemi },
  h2: { fontSize: 20, lineHeight: 28, fontFamily: CampusFonts.headingSemi },
  stat: { fontSize: 28, lineHeight: 34, fontFamily: CampusFonts.headingBold },
  bodyLg: { fontSize: 16, lineHeight: 24, fontFamily: CampusFonts.bodyMedium },
  bodyMd: { fontSize: 14, lineHeight: 20, fontFamily: CampusFonts.body },
  label: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: CampusFonts.bodySemiBold,
    letterSpacing: 0.24,
  },
  caption: { fontSize: 12, lineHeight: 16, fontFamily: CampusFonts.body },
} as const;

export const CampusSpace = {
  xs: 8,
  sm: 12,
  md: 16,
  gutter: 20,
  lg: 24,
  xl: 32,
} as const;

export const CampusRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

export const cardShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.04,
  shadowRadius: 12,
  elevation: 2,
};
