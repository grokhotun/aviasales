import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '@/redux/store'
import ErrorBoundry from '@components/ErrorBoundry/ErrorBoundry'
import App from '@components/App/App'
import '@/assets/index.scss'

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Provider>, document.querySelector('#root'))
