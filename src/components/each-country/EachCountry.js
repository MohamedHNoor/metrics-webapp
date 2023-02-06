/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './eachCountry.styles.css';

const eachCountry = (props) => {
  const { id, name, image, timezone } = props;
  return (
    <div className="each-country">
      <NavLink to={`/country/${id}`} key={id}>
        <div>
          <img className="flag-image" src={image} alt="Flag" />
        </div>
        <div className="country-details">
          <h3 className="country-name">{name}</h3>
          <h3 className="country-time">{`TimeZone:  ${timezone}`}</h3>
        </div>
      </NavLink>
    </div>
  );
};

eachCountry.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default eachCountry;
