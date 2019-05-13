import { STREAM_SERVICES } from './constants';

const chats = {
  [STREAM_SERVICES.TWITCH]: channel => `//www.twitch.tv/embed/${channel}/chat?darkpopout`,
  [STREAM_SERVICES.YOUTUBE]: id => `//www.youtube.com/live_chat?v=${id}&is_popout=1`,
  [STREAM_SERVICES.GOODGAME]: id => `//goodgame.ru/chat/${id}`,
  [STREAM_SERVICES.NONOLIVE]: id => `//www.nonolive.com/popout/chat/${id}`,
  [STREAM_SERVICES.WASD]: id => `//wasd.tv/chat?channel_id=${id}`,
};

const players = {
  [STREAM_SERVICES.TWITCH]: channel => `//player.twitch.tv/?channel=${channel}`,
  [STREAM_SERVICES.YOUTUBE]: id => `//www.youtube.com/embed/${id}?autoplay=1`,
  [STREAM_SERVICES.GOODGAME]: id => `//goodgame.ru/player?${id}`,
  [STREAM_SERVICES.NONOLIVE]: id => `//www.nonolive.com/room/${id}`,
  [STREAM_SERVICES.WASD]: id => `//wasd.tv/channel/${id}`,
};

export const getChatUrl = ({ service, payload }) => chats[service](payload);

export const getPlayerUrl = ({ service, payload }) => players[service](payload);
