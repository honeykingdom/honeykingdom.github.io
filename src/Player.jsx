import React from 'react';
import pt from 'prop-types';

import { STREAM_SERVICES } from './utils/constants';

const Player = ({ className, src }) => (
  // eslint-disable-next-line jsx-a11y/iframe-has-title
  <iframe className={className} src={src} allow="autoplay" allowFullScreen="true" />
);
Player.propTypes = {
  className: pt.string,
  src: pt.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  service: pt.oneOf(Object.values(STREAM_SERVICES)).isRequired,
};

export default Player;
