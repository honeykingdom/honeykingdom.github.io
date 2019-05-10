import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import Player from './Player';
import NonoliveMessage from './NonoliveMessage';
import { STREAM_SERVICES } from './utils/streamServices';
import { getPlayerFromUrl, getChatsFromUrl } from './utils/urlParams';
import { ReactComponent as FullscreenIcon } from './icons/fullscreen.svg';

// document.title = 'HoneyMad';

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
  height: 100vh;
  font-family: sans-serif;
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
  top: 2px;
  right: var(--chat-witdh);
  width: 32px;
  height: 28px;
`;
const Fullscreen = styled(FullscreenIcon)`
  display: inline-flex;
  width: 26px;
  height: 26px;
  margin-left: auto;
  cursor: pointer;
  color: #fff;
  transition-duration: 0.2s;
  transition-property: color;

  &:hover {
    color: #e33d3d;
  }
`;
const StyledPlayer = styled(Player)`
  position: relative;
  border: none;
  width: 100%;
  margin-right: var(--chat-witdh);

  ${p => p.service === STREAM_SERVICES.NONOLIVE
    && css`
      margin-right: 0;
    `};

  ${p => p.service === STREAM_SERVICES.WASD
    && css`
      margin-top: -53px;
      margin-right: 20px;
    `};
`;
const ChatTabs = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  height: var(--chat-tabs-height);
  width: var(--chat-witdh);
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
  position: absolute;
  top: var(--chat-tabs-height);
  right: 0;
  display: ${p => (p.active ? 'block' : 'none')};
  width: var(--chat-witdh);
  height: calc(100% - var(--chat-tabs-height));
  border: none;
  background-color: #fff;
`;

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const player = getPlayerFromUrl(urlParams.get('player'));
  const chats = getChatsFromUrl(urlParams.get('chats'));

  const [activeChat, setActiveChat] = useState(chats[0].url);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenClick = () => {
    if (isFullscreen && document.fullscreenElement) {
      setIsFullscreen(false);
      document.exitFullscreen();
    } else {
      setIsFullscreen(true);
      document.documentElement.requestFullscreen();
    }
  };

  // Убираем чат nonolive если он совпадает с каналом плеера
  const renderedChats = chats.filter(
    chat => !(chat.service === STREAM_SERVICES.NONOLIVE && chat.payload === player.payload),
  );

  return (
    <>
      <Container service={player.service}>
        <StyledPlayer src={player.url} service={player.service} />
        {player.service === STREAM_SERVICES.WASD && <WasdIconOverflow />}
        {player.service === STREAM_SERVICES.NONOLIVE && (
          <NonoliveOverflow>
            <NonoliveMessage />
            <Fullscreen onClick={handleFullscreenClick} />
          </NonoliveOverflow>
        )}
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
          <Chat key={chat.url} active={chat.url === activeChat} src={chat.url} />
        ))}
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
