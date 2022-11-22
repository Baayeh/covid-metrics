import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import { Categories, World } from '../components';

describe('UI Tests', () => {
  it('should render Landing Page', () => {
    const tree = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Homepage', () => {
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render Categories UI', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Categories />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render World UI', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <World />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
