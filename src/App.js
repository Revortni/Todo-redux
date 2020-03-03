import React from 'react';
import Counter from './component/Counter';
import Posts from './component/Posts';
import Postform from './component/Postform';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
