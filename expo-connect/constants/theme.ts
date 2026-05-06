/** Campus Parent design tokens (aligned with provided Tailwind / M3 palette) */
import ColorPalette from './Colors';

/** Campus Connect login + student shell (brand from mockups) */
export const Connect = {
  brandBlue: '#0052A3',
  canvas: '#f3f4fb',
} as const;

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
  onTertiaryContainer: '#ffe3d6',
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

/** Faculty screens — shared palette + faculty spacing / type scale */
export const BrandColors = {
  ...CampusColors,
  primaryFixedDim: '#aac7ff',
  tertiaryContainer: '#af4900',
  tertiaryFixedDim: '#ffb692',
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

export const Colors = {
  light: ColorPalette.light,
  dark: ColorPalette.dark,
};
