import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import HelloWorld from './containers/HelloWorld'

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<HelloWorld />
	</Provider>
, document.getElementById("main"));



