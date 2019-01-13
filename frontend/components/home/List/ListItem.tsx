import { Button, Divider, Icon, Tag } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { THUMBNAILS_OPTIONS } from '../../constants';
import { parseDateRange, setImageParams } from '../../helpers';
import { Conference } from './ListContainer';

interface Props {
  item: Conference;
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 15px 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div``;

const Title = styled.h3`
  font-size: 1.3em;
  font-weight: 700;
`;

const Info = styled.div`
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const ListItem = ({ item }: Props) => (
  <Wrapper>
    <Image
      alt={item.image ? item.image.alt : 'Conference image'}
      src={
        item.image
          ? setImageParams(item.image.src, THUMBNAILS_OPTIONS)
          : 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
      }
    />

    <Content>
      <Title>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </Title>

      <Info>
        <span>
          <Icon type="environment-o" /> {item.location.city},{' '}
          {item.location.country}
        </span>
        <Divider type="vertical" />
        <span>
          <Icon type="calendar" />{' '}
          {parseDateRange(item.startDate, item.endDate)}
        </span>
        <Divider type="vertical" />
        {/* <div><Icon type="shopping-cart" /> {price.amount}€</div> */}
      </Info>

      <div>
        {item.tags.map(tag => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </div>

      <Description>{item.description}</Description>
    </Content>

    <StyledButton
      type="primary"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      More info
    </StyledButton>
  </Wrapper>
);

export default ListItem;
