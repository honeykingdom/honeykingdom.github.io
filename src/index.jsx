import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './App';
import fullscreenPolyfills from './utils/fullscreen';

ReactGA.initialize('UA-139550930-1');
ReactGA.pageview(window.location.pathname + window.location.search);
fullscreenPolyfills();

ReactDOM.render(<App />, document.getElementById('root'));
