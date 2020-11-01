import React, { Component } from 'react';
import PlanetList from "../planet/PlanetList";


// Dashboard with list of planets
export default class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PlanetList />
                </div>
                
            </div>
        )
    }
}
//Dashboard with list of planets
