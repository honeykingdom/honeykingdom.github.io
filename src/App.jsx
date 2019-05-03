import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import Player from './Player';
import { STREAM_SERVICES, getChatUrl, getPlayerUrl } from './utils/streamServices';
import { getPlayerFromUrl, getChatsFromUrl } from './utils/urlParams';

document.title = 'HoneyMad';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: #0e0c13;
    --color-violet: #2c2541;
    --color-violet-dark: #1f1925;
    --chat-tabs-height: 26px;
    --chat-witdh: 340px;
  }
  body {
    margin: 0;
  }
`;
const Container = styled.div`
  display: flex;
  height: 100vh;

  ${p => p.service === STREAM_SERVICES.NONOLIVE
    && css`
      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: var(--chat-witdh);
        bottom: 0;
        height: 60px;
        background-color: #313131;
      }
    `};
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

  const [activeChatId, setActiveChatId] = useState(chats[0].id);

  // Убираем чат nonolive если он совпадает с каналом плеера
  const renderedChats = chats.filter(
    chat => !(chat.service === STREAM_SERVICES.NONOLIVE && chat.payload === player.payload),
  );

  return (
    <>
      <Container service={player.service}>
        <StyledPlayer src={getPlayerUrl(player)} service={player.service} />
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
        {renderedChats.map(chat => (
          <Chat key={chat.id} active={chat.id === activeChatId} src={getChatUrl(chat)} />
        ))}
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
