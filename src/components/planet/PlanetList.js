import React, { Component } from 'react'
import axios from 'axios';


import PlanetCard from "./PlanetCard"

// List of planets
export default class PlanetList extends Component {
    state={
        url: 'https://swapi.dev/api/planets/',
        planets: null
    };

   async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({planets : res.data ['results']});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.planets ? (
                    <div className="row">
                        {this.state.planets.map(planets => (
                           <PlanetCard 
                             name={planets.name}
                             climate={planets.climate}
                             population={planets.population}
                           />
                        ))}
                    </div>
                ) : (
                    <h1>Страницы с планетой нет</h1>
                )}
            </React.Fragment>
        );
    }
}
// List of planets