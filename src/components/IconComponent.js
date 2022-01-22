import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from '../constants';
const IconComponent = ({iconName, iconColor, iconStyle}) => {
  return (
    <FontAwesomeIcon
      style={iconStyle}
      color={iconColor ? iconColor : COLORS.gray_color}
      icon={iconName}
    />
  );
};
export default IconComponent;
