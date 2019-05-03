import React from 'react';
import styled from 'styled-components';

import { ReactComponent as TheaterModeIcon } from './icons/theater-mode.svg';

const NonoliveMessageRoot = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  opacity: 0.5;
  color: #9f9f9f;
`;
const Link = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  text-decoration: none;
  color: #f2a525;

  &:hover {
    text-decoration: underline;
  }
`;
const TheaterMode = styled(TheaterModeIcon)`
  display: inline-flex;
  width: 26px;
  height: 26px;
  color: #fff;
`;

const NonoliveMessage = () => (
  <NonoliveMessageRoot>
    Установить расширение&nbsp;
    <strong>Ignore X-Frame-Options Header</strong>
    &nbsp;(
    <Link href="https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe">
      Chrome
    </Link>
    ,&nbsp;
    <Link href="https://addons.mozilla.org/en-US/firefox/addon/ignore-x-frame-options-header/">
      Firefox
    </Link>
    ) и нажать кнопку Theatre Mode&nbsp;
    <TheaterMode />
    &nbsp;в плеере
  </NonoliveMessageRoot>
);

export default NonoliveMessage;
