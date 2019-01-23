import Router from 'next/router';

export const setUrl = (query: object) => {
  const href = {
    pathname: '/',
    query,
  };

  Router.push(href, href);
};
