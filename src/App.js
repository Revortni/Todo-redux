import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
