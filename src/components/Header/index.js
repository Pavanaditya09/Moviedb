import { Component } from "react"

import {Link} from "react-router-dom"

import "./index.css"


class Header extends  Component{
    state= {
        searchinput : ""
    }

    /*handleSubmit = () => {

        const { searchinput } = this.state;
        const { history } = this.props;
        
        // Navigate to the search results page with the query as a prop
        history.push(`/search?searchinput=${encodeURIComponent(searchinput)}`);
      }
    */
    updateSearch= (event)=>{
        this.setState({searchinput : event.target.value})
    }

    render(){
        return (
        <nav className="header-nav">
            <h1 className="website-name">MovieDb</h1>

            <div className="navigatepages">
                <Link to="/" className="link-item">
                <p className="">Popular</p>
                </Link>
                <Link to="/topRated" className="link-item">
                <p className="">Top Rated</p>
                </Link>
                <Link to="/upComing" className="link-item">
                <p className="">Upcoming</p>
                </Link>

                <div>
                    <input type="search"   className="searchbar" placeholder="Movie Name" onChange={this.updateSearch}/>
                    <button onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
        </nav>
        )
    }

}


export default Header