import { Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 0 1em;
`;

export const ItemWrapper = styled.div`
  /* display: grid;
  grid-gap: 20px; */
  grid-template-columns: auto 1fr auto;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 15px 20px;
  cursor: pointer;
  transition: 0.3s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h3`
  font-size: 1.3em;
  font-weight: 700;
`;

export const Info = styled.div`
  margin-bottom: 0.5em;
`;

export const Description = styled.div`
  font-weight: 500;
`;

export const StyledButton = styled(Button)`
  align-self: center;
`;
