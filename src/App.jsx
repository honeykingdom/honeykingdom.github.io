import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import Player from './Player';
import NonoliveMessage from './NonoliveMessage';
import { STREAM_SERVICES, PRESETS } from './utils/constants';
import useIsMobile from './hooks/useIsMobile';
import { getPlayerFromUrl, getChatsFromUrl } from './utils/urlParams';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
    --chat-tabs-height: 26px;
    --chat-witdh: 340px;
  }
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  font-family: sans-serif;

  ${p => p.isMobile
    && css`
      flex-direction: column;
      align-items: stretch;
    `}
`;
const NonoliveOverflow = styled.div`
  position: absolute;
  left: 0;
  right: var(--chat-witdh);
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 16px;
  height: 60px;
  background-color: #313131;
`;
const WasdIconOverflow = styled.div`
  position: absolute;
  top: 6px;
  right: var(--chat-witdh);
  width: 32px;
  height: 28px;
`;
const PlayerWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;

  ${p => p.service === STREAM_SERVICES.NONOLIVE
    && css`
      margin-right: calc(-1 * var(--chat-witdh));
    `};

  ${p => p.service === STREAM_SERVICES.WASD
    && css`
      --wasd-offset-top: 48px;

      height: calc(100% + var(--wasd-offset-top));
      margin-top: calc(-1 * var(--wasd-offset-top));
      margin-right: -320px;
    `};

  ${p => p.isMobile
    && css`
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;

      &:after {
        display: block;
        content: '';
        padding-top: 56.25%;
      }
    `}
`;
const StyledPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  width: 100%;
  height: 100%;
`;
const ChatsWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  width: var(--chat-witdh);

  ${p => p.isMobile
    && css`
      width: 100%;
      flex-grow: 1;
    `}
`;
const ChatTabs = styled.div`
  display: flex;
  height: var(--chat-tabs-height);
  border-bottom: 1px solid var(--color-violet);
`;
const ChatTab = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  color: ${p => (p.active ? '#d3d3d3' : '#898395')};
  background-color: var(${p => (p.active ? '--color-violet-dark' : '--color-black')});
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: var(--chat-tabs-height);
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-violet-dark);
  }
  &:not(:last-child) {
    border-right: 1px solid var(--color-violet);
  }
`;
const Chat = styled.iframe`
  display: ${p => (p.active ? 'block' : 'none')};
  width: 100%;
  height: calc(100vh - var(--chat-tabs-height));
  border: none;
  background-color: #fff;

  ${p => p.isMobile
    && css`
      height: calc(100% - var(--chat-tabs-height));
    `}
`;

const YOUTUBE_PRESET_REGEX = /^(youtube)=([a-zA-Z0-9_-]{11})$/;

const getPresetFromHash = () => {
  const hash = window.location.hash.slice(1);
  const m = YOUTUBE_PRESET_REGEX.exec(hash);

  if (m !== null) {
    const [, value, payload] = m;
    return { value, payload };
  }

  return { value: hash };
};

const isPresetValid = preset => preset && Object.keys(PRESETS).includes(preset.value);

const getInitialHash = () => {
  const preset = getPresetFromHash();
  return isPresetValid(preset) ? preset : null;
};

const getFrames = (preset) => {
  let playerParam;
  let chatsParam;

  if (preset) {
    const { value, payload } = preset;
    const { player: presetPlayer, chats: presetChats } = PRESETS[value];

    playerParam = typeof presetPlayer === 'function' ? presetPlayer(payload) : presetPlayer;
    chatsParam = typeof presetChats === 'function' ? presetChats(payload) : presetChats;
  } else {
    const urlParams = new URLSearchParams(window.location.search);

    playerParam = urlParams.get('player');
    chatsParam = urlParams.get('chats');
  }

  return {
    player: getPlayerFromUrl(playerParam),
    chats: getChatsFromUrl(chatsParam),
  };
};

const App = () => {
  const [preset, setPreset] = useState(getInitialHash);
  const { player, chats } = getFrames(preset);
  const [activeChat, setActiveChat] = useState(chats[0].url);
  const isMobileSize = useIsMobile();
  const isMobile = isMobileSize
    && player.service !== STREAM_SERVICES.WASD
    && player.service !== STREAM_SERVICES.NONOLIVE;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setActiveChat(chats[0].url), [preset]);

  useEffect(() => {
    const handleHashChange = () => {
      const newPreset = getPresetFromHash();
      if (isPresetValid(newPreset)) setPreset(newPreset);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setPreset]);

  // Убираем чат nonolive если он совпадает с каналом плеера
  const renderedChats = chats.filter(
    chat => !(chat.service === STREAM_SERVICES.NONOLIVE && chat.payload === player.payload),
  );

  return (
    <>
      <Container service={player.service} isMobile={isMobile}>
        <PlayerWrapper service={player.service} isMobile={isMobile}>
          <StyledPlayer src={player.url} />
        </PlayerWrapper>
        {player.service === STREAM_SERVICES.WASD && <WasdIconOverflow />}
        {player.service === STREAM_SERVICES.NONOLIVE && (
          <NonoliveOverflow>
            <NonoliveMessage />
          </NonoliveOverflow>
        )}
        <ChatsWrapper isMobile={isMobile}>
          <ChatTabs>
            {chats.map(chat => (
              <ChatTab
                key={chat.url}
                active={chat.url === activeChat}
                onClick={() => setActiveChat(chat.url)}
              >
                {chat.payload}
              </ChatTab>
            ))}
          </ChatTabs>
          {renderedChats.map(chat => (
            <Chat
              key={chat.url}
              active={chat.url === activeChat}
              src={chat.url}
              isMobile={isMobile}
            />
          ))}
        </ChatsWrapper>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
