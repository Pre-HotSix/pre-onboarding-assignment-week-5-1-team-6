type Colors = {
  MAIN_COLOR: string;
  BACKGROUND_COLOR: string;
  WHITE: string;
  SUB_COLOR: string;
  GRAY: '#96AAB6';
  LIGHT_GRAY: '#EFF3F7';
};

type FontSize = {
  X_SMALL: string;
  SMALL: string;
  MEDIUM: string;
  SEMI_M: string;
  TITLE: string;
};

const colors: Colors = {
  MAIN_COLOR: '#067be8',
  BACKGROUND_COLOR: '#cfe9fe',
  WHITE: '#ffffff',
  SUB_COLOR: '#367ae1',
  GRAY: '#96AAB6',
  LIGHT_GRAY: '#EFF3F7',
};

const fontSize: FontSize = {
  X_SMALL: '12px',
  SMALL: '14px',
  MEDIUM: '16px',
  SEMI_M: '21px',
  TITLE: '24px',
};

const theme = {
  colors,
  fontSize,
};

export default theme;
