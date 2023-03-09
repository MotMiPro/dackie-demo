import { IBallColor } from 'define/interface';

export const gradient_colors = {
  gray: 'linear-gradient(143.85deg, #606060 27.62%, #32252C 96.18%)',
  pinky: 'linear-gradient(143.85deg, #FF00E5 27.62%, #531B67 96.18%)',
  purple: 'linear-gradient(153.34deg, #AB69FF 6.86%, #452E89 94.88%)',
  blue_sky: 'linear-gradient(153.34deg, #63A1FF 6.86%, #2E0999 94.88%)',
  green_pastel: 'linear-gradient(143.85deg, #06F4D7 27.63%, #1B4767 96.18%)',
  green: 'linear-gradient(143.85deg, #00FF66 27.62%, #1B6759 96.18%)',
  yellow_less: 'linear-gradient(143.85deg, #F0FD5E 27.62%, #68691B 96.18%)',
  yellow_full: 'linear-gradient(143.85deg, #FFE600 27.62%, #673F1B 96.18%)',
  orange: 'linear-gradient(143.85deg, #FF9900 27.62%, #673F1B 96.18%)',
  red: 'linear-gradient(143.85deg, #FF003D 27.62%, #671B44 96.18%)',
  yellow: 'linear-gradient(to bottom, #FFD600 79.99%, rgba(255, 214, 0, 0) 97.46%)',
  yellowLessCard: 'linear-gradient(to bottom, #FFD600 0%, rgba(255, 214, 0, 0) 100%)',
};

export const ball_colors: IBallColor = {
  0: gradient_colors.gray,
  1: gradient_colors.pinky,
  2: gradient_colors.purple,
  3: gradient_colors.blue_sky,
  4: gradient_colors.green_pastel,
  5: gradient_colors.green,
  6: gradient_colors.yellow_less,
  7: gradient_colors.yellow_full,
  8: gradient_colors.orange,
  9: gradient_colors.red,
};

export const COLORs = {
  YELLOW: '#FFD600',
  PINKY: '#FF9393  ',
  YELLOW_LESS: '#FFEE96',
  SKY_LESS: '#BCD7FF',
  LAND: '#965624',
  YELLOW_LABEL: '#D98200',
};
