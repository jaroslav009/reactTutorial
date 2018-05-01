// Components JSX
import React, { Component } from 'react';
import ContainerNote from './Components/ContainerNote.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./reducers/reduce";

const storeNote = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={storeNote}>
		    <ContainerNote/>
      </Provider>
    );
  }
}

export default App;
