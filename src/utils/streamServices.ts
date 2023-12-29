import { StreamService } from './constants';

type StreamServiceLinksMap = Record<StreamService, (s: string) => string>;

// prettier-ignore
const chats: StreamServiceLinksMap = {
  [StreamService.twitch]: (channel: string) => `//www.twitch.tv/embed/${channel}/chat?darkpopout&parent=${window.location.host}`,
  [StreamService.youtube]: (id: string) => `//www.youtube.com/live_chat?v=${id}&is_popout=1`,
  [StreamService.goodgame]: (id: string) => `//goodgame.ru/chat/${id}`,
  [StreamService.rutube]: (id: string) => `//rutube.ru/pl/?pl_id&pl_type&pl_video=${id}`,
  [StreamService.vkplay]: (channel: string) => `//vkplay.live/${channel}/only-chat?initialMode=0`,
};

// prettier-ignore
const players: StreamServiceLinksMap = {
  [StreamService.twitch]: (channel: string) => `//player.twitch.tv/?channel=${channel}&parent=${window.location.host}`,
  [StreamService.youtube]: (id: string) => `//www.youtube.com/embed/${id}?autoplay=1`,
  [StreamService.goodgame]: (id: string) => `//goodgame.ru/player?${id}`,
  [StreamService.rutube]: (id: string) => `//rutube.ru/chat/?videoId=${id}`,
  [StreamService.vkplay]: (channel: string) => `//vkplay.live/app/embed/${channel}`,
};

export const getChatUrl = (service: StreamService, payload: string) =>
  chats[service](payload);

export const getPlayerUrl = (service: StreamService, payload: string) =>
  players[service](payload);
