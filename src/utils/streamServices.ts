import { StreamService } from './constants';

// prettier-ignore
const chats = {
  [StreamService.twitch]: (channel: string) => `//www.twitch.tv/embed/${channel}/chat?darkpopout&parent=${window.location.host}`,
  [StreamService.youtube]: (id: string) => `//www.youtube.com/live_chat?v=${id}&is_popout=1`,
  [StreamService.goodgame]: (id: string) => `//goodgame.ru/chat/${id}`,
  [StreamService.wasd]: (id: string) => `//wasd.tv/chat?channel_id=${id}`,
  [StreamService.mixer]: (channel: string) => `//mixer.com/embed/chat/${channel}`
};

// prettier-ignore
const players = {
  [StreamService.twitch]: (channel: string) => `//player.twitch.tv/?channel=${channel}&parent=${window.location.host}`,
  [StreamService.youtube]: (id: string) => `//www.youtube.com/embed/${id}?autoplay=1`,
  [StreamService.goodgame]: (id: string) => `//goodgame.ru/player?${id}`,
  [StreamService.wasd]: (id: string) => `//wasd.tv/channel/${id}`,
  [StreamService.mixer]: (channel: string) => `//mixer.com/embed/player/${channel}`
};

export const getChatUrl = (service: StreamService, payload: string) =>
  chats[service](payload);

export const getPlayerUrl = (service: StreamService, payload: string) =>
  players[service](payload);
