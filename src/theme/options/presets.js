import { alpha } from '@mui/material/styles';

import { grey, primary, secondary } from 'src/theme/palette';

// ----------------------------------------------------------------------

export function createPresets(preset) {
  const { primary: primaryColor, secondary: secondaryColor } = getPrimary(preset);

  const theme = {
    palette: {
      primary: primaryColor,
      secondary: secondaryColor,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(`${primaryColor.main}`, 0.24)}`,
      secondary: `0 8px 16px 0 ${alpha(`${secondaryColor.main}`, 0.24)}`,
    },
  };

  return {
    ...theme,
  };
}

// ----------------------------------------------------------------------

const preset01 = {
  primary: {
    lighter: '#FEE7E4',
    light: '#FBAEB5',
    main: '#F2779A',
    dark: '#AE3B72',
    darker: '#741655',
    contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#CAFDEB',
    light: '#61F4D9',
    main: '#00DCDA',
    dark: '#00849E',
    darker: '#004569',
    contrastText: '#FFFFFF',
  },
};

const preset02 = {
  primary: {
    lighter: '#FEE9D1',
    light: '#FDAB76',
    main: '#FA541C',
    dark: '#B3200E',
    darker: '#770508',
    contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#E6DBFE',
    light: '#B195FE',
    main: '#754FFE',
    dark: '#4027B6',
    darker: '#1C0F79',
    contrastText: '#FFFFFF',
  },
};

const preset03 = {
  primary: {
    lighter: '#CCF4FE',
    light: '#68CDF9',
    main: '#078DEE',
    dark: '#0351AB',
    darker: '#012972',
    contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#FFF3D8',
    light: '#FFD18B',
    main: '#FFA03F',
    dark: '#B75D1F',
    darker: '#7A2D0C',
    contrastText: grey[800],
  },
};

const preset04 = {
  primary: {
  lighter: '#FEE9D1',
  light: '#FDAB76',
  main: '#FA541C',
  dark: '#B3200E',
  darker: '#770508',
  contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#FEEFD5',
    light: '#FBC182',
    main: '#F37F31',
    dark: '#AE4318',
    darker: '#741B09',
    contrastText: '#FFFFFF',
  },
};

const preset05 = {
  primary: {
    lighter: '#F9E9D1',
    light: '#DBA573',
    main: '#87431D',
    dark: '#61210E',
    darker: '#400C05',
    contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#FCF0DA',
    light: '#EEC18D',
    main: '#C87941',
    dark: '#904220',
    darker: '#601B0C',
    contrastText: '#FFFFFF',
  },
};

export const presetOptions = [
  { name: 'default', value: [primary.main, secondary.main] },
  { name: 'preset01', value: [preset01.primary.main, preset01.secondary.main] },
  { name: 'preset02', value: [preset02.primary.main, preset02.secondary.main] },
  { name: 'preset03', value: [preset03.primary.main, preset03.secondary.main] },
  { name: 'preset04', value: [preset04.primary.main, preset04.secondary.main] },
  { name: 'preset05', value: [preset05.primary.main, preset05.secondary.main] },
];

export function getPrimary(preset) {
  return {
    default: { primary, secondary },
    preset01,
    preset02,
    preset03,
    preset04,
    preset05,
  }[preset];
}
