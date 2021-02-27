import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider as MoviesProvider} from './context/MoviesDataContext'


ReactDOM.render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
