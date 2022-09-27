type Colors = {
  MAIN_COLOR: string;
  BUTTON_COLOR: string;
  WHITE: string;
};

type FontSize = {
  X_SMALL: string;
  SMALL: string;
  MEDIUM: string;
  SEMI_M: string;
  TITLE: string;
};

const colors: Colors = {
  MAIN_COLOR: '#d0e8fd',
  BUTTON_COLOR: '#357ae1',
  WHITE: '#ffffff',
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
