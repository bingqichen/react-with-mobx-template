import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import router from './router';

import AppStore from './stores/AppStore';

useStrict(true);

const stores = {
  appStore: new AppStore()
};

render(<Provider {...stores}>{ router }</Provider>, document.getElementById('root'));
