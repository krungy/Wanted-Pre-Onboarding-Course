import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import color from '@assets/colors';

const IconComponent = ({ name, color, height, ...props }) => {
  return <Icon icon={name} color={color} height={height} {...props} />;
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.number,
};

IconComponent.defaultProps = {
  color: `${color.black}`,
  height: 18,
};

export default IconComponent;
