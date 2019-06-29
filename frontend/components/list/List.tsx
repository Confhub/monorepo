import { Divider, Icon, Tag } from 'antd';
import Link from 'next/link';
import React from 'react';
import ReactMapGL from 'react-map-gl';
import styled from 'styled-components';

import { Conference } from '../../codegen/generated/graphql';
import { THUMBNAILS_OPTIONS } from '../constants';
import { parseDateRange, setImageParams } from '../helpers';
import {
  Image,
  Info,
  ItemWrapper,
  Title,
  // Wrapper,
} from './styles';

interface Props {
  data: Conference;
}

const Total = ({ totalAmount }: { totalAmount: number }) => (
  <h3>Found: {totalAmount} items</h3>
);

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;

  div:first-child {
    grid-column: 1 / span 2;
  }

  div:nth-child(4) {
    grid-column: 2 / span 2;
    grid-row: 2 / 3;
  }
`;

export const MapWrapper = styled.div`
  grid-column: 4 / span 5;
  grid-row: 1 / span 2;
`;

const Empty = () => <h3>No data available :(</h3>;

const Map = () => (
  <MapWrapper>
    <ReactMapGL
      width="100%"
      height="100%"
      latitude={37.7577}
      longitude={-122.4376}
      zoom={8}
      mapboxApiAccessToken="pk.eyJ1IjoieWFrb3ZsZXZ5dXJpIiwiYSI6ImNqajhyYjl5czJjYngzcGxrdW5ha3M5cTIifQ.pl56gP3ckJtK6jUS7Ol9qQ"
    />
  </MapWrapper>
);

const Item = ({ data }: Props) => (
  <ItemWrapper>
    <Image
      alt={data.image && data.image.alt ? data.image.alt : 'Conference image'}
      src={
        data.image
          ? setImageParams(data.image.src, THUMBNAILS_OPTIONS)
          : 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
      }
    />

    <div>
      <Title>
        <Link as={`/conference/${data.id}`} href={`/conference?id=${data.id}`}>
          <a>{data.name}</a>
        </Link>

        {/* <a href={data.url} target="_blank" rel="noopener noreferrer">
          {data.name}
        </a> */}
      </Title>

      <Info>
        <span>
          <Icon type="environment-o" /> {data.location.city},{' '}
          {data.location.country}
        </span>
        <Divider type="vertical" />
        <span>
          <Icon type="calendar" />{' '}
          {parseDateRange(data.startDate, data.endDate)}
        </span>
        <Divider type="vertical" />
        {/* <div><Icon type="shopping-cart" /> {price.amount}€</div> */}
      </Info>

      <div>
        {data.tags && data.tags.map(tag => <Tag key={tag.id}>{tag.name}</Tag>)}
      </div>

      {/* <Description>{data.description}</Description> */}
    </div>

    {/* <StyledButton
      type="primary"
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      More info
    </StyledButton> */}
  </ItemWrapper>
);

const List = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

List.Item = Item;
List.Total = Total;
List.Empty = Empty;
List.Map = Map;

export default List;
