import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Card-info with planet
export default class PlanetCard extends Component {
    state={
        name:'',
        climate:'',
        population:''
        };

    componentDidMount(){
        const {name, climate, population} = this.props;
    
    this.setState({
        name,
        climate,
        population   
    });
    }
    render() {
        return (
            
            <div className="col-md-6 col-sm-6 mb-5">
                <Link to={`planet/${this.state.name}`}>
                <div className="card">
                    <div className="cardbody mx-auto">
                       <h1 className="name">{this.state.name}</h1>
                    </div>
                   <div className="card-header">
                     <h5 className="card-title">Климат: {this.state.climate}</h5>
                     <h5 className="card-title">Население:{this.state.population}</h5>
                    </div> 
                </div>
                </Link>
            </div>
                
         
        )
    }
}
// Card-info with planet