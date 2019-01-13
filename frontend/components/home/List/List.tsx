import React, { Fragment } from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 0 1em;
`;

const List = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.length ? (
        <Fragment>
          <h3>Found: {items.length} items</h3>

          {items.map(i => (
            <ListItem key={i.id} item={i} />
          ))}
        </Fragment>
      ) : (
        <h3>No data available :(</h3>
      )}
    </Wrapper>
  );
};

export default List;
