import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import store from '../redux/configureStore';

it('should render the homepage components correctly', () => {
  const homepage = render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>,
  );
  expect(homepage).toMatchSnapshot();
});
