import React from 'react';
import axios from 'axios';
import Country from './Country';
import './Data.css';


const api = axios.create({
    baseURL : `https://restcountries.eu/rest/v2/region/`
})

export default class Data extends React.Component {

    state = {
        cities: []
    }

    constructor(){
        super();
        this.getCities();
        // api.get("/asia").then(res=>{
        //     this.setState({cities:res.data})
        // })
    }

    //function to make GET request
    getCities= async(props) =>{
        //pulling the data as object and then return it
        let data= await api.get('/asia').then(({data})=>data);
        console.log("A new GET request's Response: "+data)
        this.setState({cities: data})
    }
    
    render(){
        return (
            <div className="home">
                <div className="intro">
                    <h1>Countries in Asia</h1>
                    <button onClick={this.getCities} className="refresh__button">Refresh</button>
                </div>
                
                {/* header */}
                <div className="header">
                    <h3 className="name">Country</h3>
                    <h3 className="capital">Capital</h3>
                    <h3 className="region">Region</h3>
                    <h3 className="subregion">Subregion</h3>
                    <h3 className="population">Population</h3>
                    <h3 className="borders">Borders</h3>
                    <h3 className="languages">Languages</h3>
                </div>

                {/* map through each city */}
                {this.state.cities.map(country=>
                    <Country
                        country={country}
                    />
                )}
            </div>
        )
    }
}

