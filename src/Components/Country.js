import React from 'react';
import './Country.css';

function country({country}) {
    return (
        <div className="country">
            <img src={country.flag} alt="" className="flagIcon"/>
            <h3 className="name">{country.name}</h3>
            <p className="capital">{country.capital}</p>
            <p className="region">{country.region}</p>
            <p className="subregion">{country.subregion}</p>
            <p className="population">{country.population}</p>

            {/* Iterate through the borders and print rowise */}
            <div className="borders">         
                {country.borders.slice(0, country.borders.length-1).map((border, key) =>
                    <span>{border}, </span>
                )}
                <span>{country.borders[country.borders.length-1]}</span>
            </div>

            {/* Iterate through the languages and print rowise */}
            <div className="languages">
                {country.languages.map(lan=>{
                    return <span>{lan.name}, </span>
                })}
                
            </div>

    </div>
    )
}

export default country
