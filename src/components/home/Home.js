import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry, searchCountry } from '../../redux/countries';
import AllCountries from '../all-countries/AllCounries';
import './home.styles.css';

let render = true;
const Home = () => {
  const country = useSelector((state) => state.countries, shallowEqual);
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    if (render) {
      dispatch(fetchCountry());
      render = false;
    }
  }, [dispatch]);

  useEffect(() => {
    if (searchField !== '') {
      setTimeout(() => {
        dispatch(searchCountry(searchField));
      }, 1000);
    } else {
      dispatch(fetchCountry());
    }
  }, [dispatch, searchField]);

  return (
    <div className="home-container">
      <div className="search-box">
        <img src="" alt="africa map" className="map-photo" />
        <div>
          <h3 className="africa-title">Africa</h3>
          <p className="africa-population">1.216 billion</p>
        </div>
        <input
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          type="search"
          placeholder="Search a country..."
          className="search"
        />
      </div>
      <div className="title-div">
        <h3 className="title">African Countries</h3>
      </div>
      <div className="list-page">
        <AllCountries data={country} />
      </div>
    </div>
  );
};

export default Home;
