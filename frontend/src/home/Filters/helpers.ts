import Router from 'next/router';

export const setUrl = (query: object) => {
  const href = {
    pathname: '/',
    query,
  };

  // @ts-ignore
  Router.push(href, href);
};
