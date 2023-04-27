import { normalize } from "../utils/normalize";

export default {
  COLORS: {
    WHITE: '#FFFFFF',
    BLACK: '#000000'
  },
  FONT_FAMILY: {
    REGULAR: 'SF-Pro-Display-Regular', 
    SEMIBOLD: 'SF-Pro-Display-Semibold',
    BOLD: 'SF-Pro-Display-Bold'
  },
  FONT_WEIGHT: {
    REGULAR: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: 'bold'
  },
  FONT_SIZE: {
    MD: normalize(14), 
    LG: normalize(18),
    XL: normalize(20),
    XXL: normalize(64)  
  },
  SPACING: { 
    M: normalize(12),
    MD: normalize(20), 
    LM: normalize(30),
    LG: normalize(38),
    XL: normalize(40)
  },
  BORDER_RADIUS: {  
    LG: normalize(20)
  }
}
