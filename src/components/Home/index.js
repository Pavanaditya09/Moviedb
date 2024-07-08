import { Component } from "react"
import {FadeLoader} from "react-spinners";
import Header from "../Header"
import Movie from "../movie"
import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Home extends Component{
    state= {
        popularMovies : [],
        apiStatus: apiStatusConstants.initial,
    }


    componentDidMount() {
        this.getPopularMovies()
        this.showLoader()
      }

    getPopularMovies = async ()=>{
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
          })
          const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d52a10af91c22af4a2195c3b18d8f49f&language=en-US&page=1'
          const options = {
            method: 'GET',
          }
          const response = await fetch(apiUrl, options)
          if (response.ok === true) {
            const fetchedData = await response.json()
            const updatedData = fetchedData.results.map(movie => ({
              id : movie.id,
              language: movie.original_language,
              title: movie.original_title,
              overview: movie.overview,
              rating : parseFloat(movie.vote_average.toFixed(1)),
              movieBackgroundPoster : movie.backdrop_path,
              moviePoster: movie.poster_path,     
            }))

            console.log(updatedData)
            this.setState({
              popularMovies: updatedData,
            })
          }
          if (response.status === 401) {
            this.setState({
              apiStatus: apiStatusConstants.failure,
            })
          }
    }

    showLoader = ()=>{
      setTimeout(()=>{
        this.setState({apiStatus: apiStatusConstants.success});
      },500)

    }

    renderLoadingView = () => (
        <div className="loading-view">

          <FadeLoader color="rgba(143, 140, 140, 1)" height={19} margin={2} radius={17} width={5} />
        </div>
      )

 

    renderMoviesList= ()=>{
      const {popularMovies} = this.state
        return (
          <div className="Popularmovies-page">
            <ul className="movies-list">
              {popularMovies.map(movie => (
                <Movie movieData={movie} key={movie.id} />
              ))}
            </ul>
          </div>
        )

    }
      
    renderMovieDetails ()  {
        const {apiStatus} = this.state

        switch (apiStatus){
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.success:
                return this.renderMoviesList()
            default:
                return null
        }
        
    }

    /* renderMoviesList = () => {
      const {popularMovies} = this.state
        return (
          <div>
            <h1 className="popular-list-heading">PoPular Movies : </h1>
            <ul className="movies-list">
              {popularMovies.map(movie => (
                <Movie movieData={movie} key={movie.id} />
              ))}
            </ul>
          </div>
        )
      } */

    render(){
        return (
          <>
          <Header/>
          {this.renderMovieDetails()}</>
        )

    }

}


export default Home