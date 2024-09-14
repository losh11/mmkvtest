import React from 'react';
import {Provider} from 'react-redux';
import {pStore, store} from './src/store';
import App from './src/screens/App';
import {PersistGate} from 'redux-persist/integration/react';

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={pStore}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Main;
