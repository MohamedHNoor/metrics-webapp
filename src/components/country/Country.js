/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../../redux/countries';
import './country.styles.css';

const CountriesDetalis = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const { id } = useParams();
  const index = country.findIndex((item) => item.id === +id);

  return (
    <ul className="row">
      <li key={country[index].name}>
        <div className="country-list">
          <h2>{country[index].name}</h2>
        </div>
        <img src={country[index].image} alt="flag" />
        <div className="item">
          <p>Capital:</p>
          <p>{country[index].capital}</p>
        </div>
        <div className="item">
          <p>Population:</p>
          <p>{country[index].population}</p>
        </div>
        <div className="item">
          <p>SubRegion:</p>
          <p>{country[index].subregion}</p>
        </div>
        <div className="item">
          <p>TimeZone:</p>
          <p>{country[index].timezone}</p>
        </div>
      </li>
    </ul>
  );

  // return (
  //   <div className="country-container">
  //     <div className="flag-name">
  //       <img src={country[index].image} alt="Flag" />
  //       <h3 className="country-name">{country[index].name}</h3>
  //     </div>

  //     <div>
  //       <span className="country-info">Country Information</span>
  //     </div>
  //     <div className="country-info-container">
  //       <div className="info">
  //         <p>Capital:</p>
  //         <span>{country[index].capital}</span>
  //       </div>
  //       <div className="info">
  //         <p>Population:</p>
  //         <span>{country[index].population}</span>
  //       </div>
  //       <div className="info">
  //         <p>Timezone:</p>
  //         <span>{country[index].timezone}</span>
  //       </div>
  //       <div className="info">
  //         <p>Subregion:</p>
  //         <span>{country[index].subregion}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default CountriesDetalis;
