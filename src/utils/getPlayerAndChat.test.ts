import { getPlayerUrl, getChatUrl } from "./streamServices";
import getPlayerAndChat, { getFrame, DEFAULT_PRESET } from "./getPlayerAndChat";
import { PRESETS, StreamService } from "./constants";
import { PresetText, PresetFunction } from "./types";

const {
  player: DEFAULT_PLAYER,
  chats: DEFAULT_CHATS
} = DEFAULT_PRESET as PresetText;

const getPlayer = (player: string) => getFrame(player, getPlayerUrl);
const getChats = (chats: string) =>
  chats.split(",").map(chat => getFrame(chat, getChatUrl));

const DEFAULT_PLAYER_AND_CHAT = {
  player: getPlayer(DEFAULT_PLAYER),
  chats: getChats(DEFAULT_CHATS)
};

describe("getFrame", () => {
  it("should return null for invalid values", () => {
    const player = "someservice@username";

    expect(getFrame(player, getPlayerUrl)).toBe(null);
  });

  it("should parse twitch frame", () => {
    const payload = "honeymad";

    expect(getFrame(payload, getPlayerUrl)).toEqual({
      service: StreamService.twitch,
      payload,
      url: getPlayerUrl(StreamService.twitch, payload)
    });
  });

  it("should parse other frames", () => {
    const service = "goodgame";
    const payload = "99600";

    expect(getFrame(`${service}@${payload}`, getPlayerUrl)).toEqual({
      service: StreamService.goodgame,
      payload,
      url: getPlayerUrl(StreamService.goodgame, payload)
    });
  });
});

describe("getStreamServices", () => {
  it("should handle empty hash and query params", () => {
    expect(getPlayerAndChat({ hash: "", searchParams: "" })).toEqual({
      player: getPlayer(DEFAULT_PLAYER),
      chats: getChats(DEFAULT_CHATS)
    });
  });

  // hash
  it("sould handle preset", () => {
    const name = "gg-lasqa";
    const { player, chats } = PRESETS[name] as PresetText;

    expect(getPlayerAndChat({ hash: `#${name}`, searchParams: "" })).toEqual({
      player: getPlayer(player),
      chats: getChats(chats)
    });
  });

  it("sould handle preset with function", () => {
    const name = "youtube";
    const payload = "dQw4w9WgXcQ";
    const { player, chats } = PRESETS[name] as PresetFunction;

    expect(
      getPlayerAndChat({
        hash: `#${name}=${payload}`,
        searchParams: ""
      })
    ).toEqual({
      player: getPlayer(player(payload)),
      chats: getChats(chats(payload))
    });
  });

  it("sould handle nonexistent preset", () => {
    expect(
      getPlayerAndChat({
        hash: "#nonexistentpreset",
        searchParams: ""
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);
  });

  // url params
  it('sould handle valid "player" value', () => {
    const player1 = "lasqa";
    const player2 = "mixer@JoaquinPanis";

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?player=${player1}`
      })
    ).toEqual({
      player: getPlayer(player1),
      chats: getChats(player1)
    });

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?player=${player2}`
      })
    ).toEqual({
      player: getPlayer(player2),
      chats: getChats(player2)
    });
  });

  it('sould handle invalid "player" value', () => {
    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: "?player="
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: "?player=someservice@username"
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);
  });

  it('sould handle valid "chats" values', () => {
    const chats1 = `goodgame@41677`;
    const chats2 = `honeymad,goodgame@41677`;

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?chats=${chats1}`
      })
    ).toEqual({
      player: getPlayer(DEFAULT_PLAYER),
      chats: getChats(chats1)
    });

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?chats=${chats2}`
      })
    ).toEqual({
      player: getPlayer(DEFAULT_PLAYER),
      chats: getChats(chats2)
    });
  });

  it('sould handle invalid "chats" values', () => {
    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: "?chats="
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: "?chats=someservice@username,twitchkiller2000@lirik"
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);
  });

  it('sould handle both valid "player" and "chats" values', () => {
    const player1 = "honeymad";
    const chats1 = "youtube@dQw4w9WgXcQ";
    const player2 = "goodgame@41677";
    const chats2 = "lasqa,mixer@JoaquinPanis";

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?player=${player1}&chats=${chats1}`
      })
    ).toEqual({
      player: getPlayer(player1),
      chats: getChats(chats1)
    });

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: `?player=${player2}&chats=${chats2}`
      })
    ).toEqual({
      player: getPlayer(player2),
      chats: getChats(chats2)
    });
  });

  it('sould handle both invalid "player" and "chats" values', () => {
    expect(
      getPlayerAndChat({
        hash: "",
        searchParams: "?player=&chats="
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);

    expect(
      getPlayerAndChat({
        hash: "",
        searchParams:
          "?player=someservice@username&chats=twitchkiller2000@lirik"
      })
    ).toEqual(DEFAULT_PLAYER_AND_CHAT);
  });
});
