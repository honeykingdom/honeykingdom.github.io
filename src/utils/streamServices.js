export const STREAM_SERVICES = {
  TWITCH: 'twitch',
  NONOLIVE: 'nonolive',
  GOODGAME: 'goodgame',
  WASD: 'wasd',
};

export const getChatUrl = ({ service, payload }) => {
  switch (service) {
    case STREAM_SERVICES.TWITCH:
    default:
      return `//www.twitch.tv/embed/${payload}/chat?darkpopout`;

    case STREAM_SERVICES.GOODGAME:
      return `//goodgame.ru/chat/${payload}`;

    case STREAM_SERVICES.NONOLIVE:
      return `//www.nonolive.com/popout/chat/${payload}`;

    case STREAM_SERVICES.WASD:
      return `//wasd.tv/chat?channel_id=${payload}`;
  }
};

export const getPlayerUrl = ({ service, payload }) => {
  switch (service) {
    case STREAM_SERVICES.TWITCH:
    default:
      return `//player.twitch.tv/?channel=${payload}`;

    case STREAM_SERVICES.GOODGAME:
      return `//goodgame.ru/player?${payload}`;

    case STREAM_SERVICES.NONOLIVE:
      return `//www.nonolive.com/room/${payload}`;

    case STREAM_SERVICES.WASD:
      return `//wasd.tv/channel/${payload}/main`;
  }
};
