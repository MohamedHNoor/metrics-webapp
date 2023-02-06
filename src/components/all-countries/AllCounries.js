/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import EachCountry from '../each-country/EachCountry';
import './all-countries.styles.css';

const AllCountry = ({ data }) => (
  <div className="countries-container">
    {data.map((country, idx) => (
      <EachCountry
        key={country.id}
        index={idx}
        id={country.id}
        image={country.image}
        population={country.population}
        name={country.name}
        langeuages={country.langeuages}
        capital={country.capital}
        timezone={country.timezone}
        subregion={country.subregion}
      />
    ))}
  </div>
);

export default AllCountry;
