import React, { Component } from 'react'


// Detail for planet
export default class Planet  extends Component {
    state={
        name:'',
        climate:'',
        population:'',
        rotation_period:'',
        diameter:'',
        gravity:'',
        terrain:'',
        residents:''
     };

    componentDidMount(){
        const {name, climate,population,rotation_period,diameter,gravity,terrain,residents} = this.props;
    
    this.setState({
        name,
        climate,
        population,
        rotation_period,
        diameter,
        gravity,
        terrain,
        residents

    });
    }
    render() {
        return (
            
            <div className="col-md-6 col-sm-6 mb-5">
                
                <div className="card">
                    <div className="cardbody mx-auto">
                       <h1 className="name">Название-{this.state.name}</h1>
                    </div>
                   <div className="card-header">
                     <h5 className="card-title">Климат: {this.state.climate}</h5>
                     <h5 className="card-title">Население: {this.state.population}</h5>
                     <h5 className="card-title">Период оборота: {this.state.rotation_period}</h5>
                     <h5 className="card-title">Диаметр: {this.state.diameter}</h5>
                     <h5 className="card-title">Гравитация: {this.state.gravity}</h5>
                     <h5 className="card-title">Тип местности: {this.state.terrain}</h5>
                     <h5 className="card-title">известные жители: {this.state.residents}</h5>
                    </div> 
                </div>
               
            </div>
                
         
        )
    }
}
// Detail for planet