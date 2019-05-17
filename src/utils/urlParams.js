import { getChatUrl, getPlayerUrl } from './streamServices';
import { STREAM_SERVICES, PRESETS } from './constants';

const CHANNEL_SEPARATOR = '@';
const CHATS_SEPARATOR = ',';

const { player: DEFAULT_PLAYER, chats: DEFAULT_CHATS } = PRESETS.wasd;

const isValidStreamService = streamService => streamService && Object.values(STREAM_SERVICES).includes(streamService.service);

const getStreamService = (urlParam, getUrl) => {
  if (!urlParam) return null;

  const streamService = urlParam.split(CHANNEL_SEPARATOR);

  if (streamService.length === 1) {
    const service = STREAM_SERVICES.TWITCH;
    const [payload] = streamService;

    return {
      service,
      payload,
      url: getUrl({ service, payload }),
    };
  }

  if (streamService.length === 2) {
    const [service, payload] = streamService;

    return {
      service,
      payload,
      url: getUrl({ service, payload }),
    };
  }

  return null;
};

export const getPlayerFromUrl = (urlParam) => {
  const player = getStreamService(urlParam, getPlayerUrl);

  return isValidStreamService(player) ? player : getStreamService(DEFAULT_PLAYER, getPlayerUrl);
};

const getChats = urlParam => urlParam.split(CHATS_SEPARATOR).map(chat => getStreamService(chat, getChatUrl));

export const getChatsFromUrl = (urlParam) => {
  const chats = getChats(urlParam || DEFAULT_CHATS);
  const validChats = chats.filter(chat => chat && isValidStreamService(chat));

  return validChats.length > 0 ? validChats : getChats(DEFAULT_CHATS);
};