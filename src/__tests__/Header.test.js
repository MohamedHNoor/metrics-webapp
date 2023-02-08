import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';

it('should render the component Correctly', () => {
  const header = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(header).toMatchSnapshot();
});
