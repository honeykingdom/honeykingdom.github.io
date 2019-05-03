import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import fullscreenPolyfills from './utils/fullscreen';

fullscreenPolyfills();

ReactDOM.render(<App />, document.getElementById('root'));
