import React from 'react'
import './styles/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Movies from './components/Containers/Movies'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/:movieType' component={Movies} />
          <Route path='/movies/:movieId' component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
