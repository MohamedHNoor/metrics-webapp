import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './eachCountry.styles.css';

const eachCountry = (props) => {
  const {
    id, name, image, timezone,
  } = props;
  return (
    <div className="each-country">
      <NavLink to={`/country/${id}`} key={id}>
        <div className="list">
          <h2>{name}</h2>
          <AiOutlineArrowRight className="righ-arrow" />
        </div>
        <div>
          <img className="flag-image" src={image} alt="Flag" />
        </div>
        <div className="country-details">
          <p>TimeZone:</p>
          <p>{timezone}</p>
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
