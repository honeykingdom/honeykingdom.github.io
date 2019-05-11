import React, { useLayoutEffect, useRef } from 'react';
import pt from 'prop-types';

import { STREAM_SERVICES } from './utils/constants';

const Player = ({ className, src, service }) => {
  const playerRef = useRef(null);

  useLayoutEffect(() => {
    if (playerRef.current && service === STREAM_SERVICES.TWITCH) {
      playerRef.current.setAttribute('allowfullscreen', 'true');
    }
  }, [service]);

  // eslint-disable-next-line jsx-a11y/iframe-has-title
  return <iframe className={className} src={src} ref={playerRef} />;
};

Player.propTypes = {
  className: pt.string,
  src: pt.string.isRequired,
  service: pt.oneOf(Object.values(STREAM_SERVICES)).isRequired,
};

export default Player;
