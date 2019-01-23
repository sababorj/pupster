import React, {Component} from "react";
import API from "../../utils/API";
class Search extends Component {

    state = {
        breed : '',
        result: []
    };

    HandleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
    }

    searchDog = query => {
        API.search(query)
        .then( res => {
            console.log(res.data.message)
            this.setState({
            result : res.data.message
         })
        })
    }
    HandleSubmit = (event) => {
        event.preventDefault()
        this.searchDog(this.state.breed)
    }

    render() {
        return (<><div>
        <form className="search">
        <div className="form-group">
        <label htmlFor="breed">Breed Name:</label>
        <input type="text" 
        name="breed" 
        list="breeds" 
        className="form-control" 
        placeholder="Type in a dog breed to begin" 
        id="breed" 
        onChange={this.HandleInputChange} />
        <button type="submit" className="btn btn-success"  onClick={this.HandleSubmit}>Search</button>
        </div>
        </form>
        </div>
        <div>
            <ul className="list-group search-results">
            {this.state.result.map( (dog, index) => (
            <li lassName="list-group-item">
            <img key={index} src={dog}>
            </img>
            </li>
            ))}
            </ul>
        </div>
        </>
              );
    }
}

export default Search;