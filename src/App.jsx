import React, { useState, useRef, useLayoutEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import { getChatUrl, getPlayerUrl } from './utils/streamServices';

document.title = 'HoneyNyticK - Twitch';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
    --chat-tabs-height: 26px;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;

  ${p => p.service === 'nonolive'
    && css`
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 340px;
        bottom: 0;
        height: 60px;
        background-color: #313131;
      }
    `};
`;
const Player = styled.iframe`
  position: relative;
  border: none;
  width: 100%;

  ${p => p.service === 'nonolive'
    && css`
      margin-right: -340px;
    `};
`;
const ChatWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 340px;
`;
const ChatTabs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
const Chats = styled.div`
  position: relative;
  margin-top: var(--chat-tabs-height);
  height: calc(100% - var(--chat-tabs-height));
`;
const Chat = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${p => (p.active ? 'block' : 'none')};
  z-index: ${p => (p.active ? 1 : 0)};
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  border: none;
  background-color: #fff;
`;

const player = { service: 'twitch', payload: 'honeymad' };

const chats = [
  { id: 1, service: 'twitch', payload: 'honeymad' },
  { id: 2, service: 'twitch', payload: 'nytick' },
];

const App = () => {
  const [activeChatId, setActiveChatId] = useState(chats[0].id);
  const playerRef = useRef(null);

  useLayoutEffect(() => {
    if (playerRef.current && player.service === 'twitch') {
      playerRef.current.setAttribute('allowfullscreen', 'true');
    }
  }, []);

  return (
    <>
      <Container service={player.service}>
        <Player name="player" src={getPlayerUrl(player)} service={player.service} ref={playerRef} />
        <ChatWrapper>
          <ChatTabs>
            {chats.map(chat => (
              <ChatTab
                key={chat.id}
                active={chat.id === activeChatId}
                onClick={() => setActiveChatId(chat.id)}
              >
                {chat.payload}
              </ChatTab>
            ))}
          </ChatTabs>
          <Chats>
            {chats.map(chat => (
              <Chat key={chat.id} active={chat.id === activeChatId} src={getChatUrl(chat)} />
            ))}
          </Chats>
        </ChatWrapper>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
