import { getPlayerUrl, getChatUrl } from "./streamServices";
import { StreamService, Frame, PresetText } from "./types";
import { PRESETS } from "./constants";

const YOUTUBE_PRESET_REGEX = /^(youtube)=([a-zA-Z0-9_-]{11})$/;

export const DEFAULT_PRESET = PRESETS.wasd;
const {
  player: DEFAULT_PLAYER,
  chats: DEFAULT_CHATS
} = DEFAULT_PRESET as PresetText;

const CHANNEL_SEPARATOR = "@";
const CHATS_SEPARATOR = ",";

const isValidService = (service: string) => service in StreamService;

export const getFrame = (
  urlParam: string | null,
  getUrl: typeof getChatUrl | typeof getPlayerUrl
): Frame | null => {
  if (!urlParam) return null;

  const params = urlParam.split(CHANNEL_SEPARATOR);

  let service: StreamService | null = null;
  let payload: string | null = null;

  if (params.length === 1) {
    const [channel] = params;

    service = StreamService.twitch;
    payload = channel;
  }

  if (params.length === 2) {
    const [paramsService, paramsPayload] = params;

    if (!isValidService(paramsService)) return null;

    service = paramsService as StreamService;
    payload = paramsPayload;
  }

  if (!service || !payload) return null;

  return {
    service,
    payload,
    url: getUrl(service, payload)
  };
};

export const getPlayerFrame = (urlParam: string | null) => {
  const player = getFrame(urlParam, getPlayerUrl);

  return player || (getFrame(DEFAULT_PLAYER, getPlayerUrl) as Frame);
};

const getChats = (urlParam: string) =>
  urlParam.split(CHATS_SEPARATOR).map(chat => getFrame(chat, getChatUrl));

export const getChatFrames = (urlParam: string | null) => {
  const chats = getChats(urlParam || DEFAULT_CHATS);
  const validChats = chats.filter(Boolean);

  return (validChats.length > 0
    ? validChats
    : getChats(DEFAULT_CHATS)) as Frame[];
};

type GetPlayerAndChatParams = {
  hash: string;
  searchParams: string;
};

const getPlayerAndChat = ({ hash, searchParams }: GetPlayerAndChatParams) => {
  const search = new URLSearchParams(searchParams);

  let playerText = search.get("player");
  let chatsText = search.get("chats");

  // check hash
  const preset = hash.slice(1);

  if (preset) {
    const match = YOUTUBE_PRESET_REGEX.exec(preset);

    let presetService = "";
    let presetPayload = "";

    if (match !== null) {
      const [, service, payload] = match;

      presetService = service;
      presetPayload = payload;
    } else {
      presetService = preset;
    }

    if (Object.keys(PRESETS).includes(presetService)) {
      const { player, chats } = PRESETS[presetService];

      playerText =
        typeof player === "function" ? player(presetPayload) : player;
      chatsText = typeof chats === "function" ? chats(presetPayload) : chats;
    }
  }

  // default values
  // both player and chats are not set
  if (!playerText && !chatsText) {
    playerText = DEFAULT_PLAYER;
    chatsText = DEFAULT_CHATS;
  }

  // only chats is set
  if (!playerText) {
    playerText = DEFAULT_PLAYER;
  }

  // only player is set
  if (!chatsText) {
    chatsText = playerText;
  }

  const player = getPlayerFrame(playerText);
  const chats = getChatFrames(chatsText);

  return { player, chats };
};

export default getPlayerAndChat;
