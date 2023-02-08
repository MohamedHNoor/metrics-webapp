import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from '../components/home/Home';
import store from '../redux/configureStore';

it('should render the homepage components correctly', () => {
  const homepage = render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  expect(homepage).toMatchSnapshot();
});
