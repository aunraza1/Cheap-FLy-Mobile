import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS, SIZES} from '../constants';
const IconComponent = ({iconName, iconColor, iconStyle, size}) => {
  return (
    <FontAwesomeIcon
      size={size ? size : SIZES.padding}
      style={iconStyle}
      color={iconColor ? iconColor : COLORS.gray_color}
      icon={iconName}
    />
  );
};
export default IconComponent;
