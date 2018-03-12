import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devToolsEnhancer from "remote-redux-devtools";
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise, logger());

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devToolsEnhancer({
      name: Platform.OS,
      hostname: "10.0.0.117",
      port: 8000
    })
  )
);

export default Store;
