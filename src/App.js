import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from  './components/Home'
import TopRatedMovies from './components/TopRatedMovies'
import UpComingMovies from './components/UpcomingMovies'

import './App.css'

const  App = () =>(
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/toprated' Component={TopRatedMovies} />
        <Route path='/upcoming' Component={UpComingMovies} />
      </Routes>
    </Router>
  )


export default App