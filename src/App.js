import React from 'react'
import './styles/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Movies from './components/Containers/Movies'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Movies} exact />
          <Route path='/:movieType' component={Movies} exact/>
          <Route path='/movies/:movieId' component={MovieDetail} exact/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
