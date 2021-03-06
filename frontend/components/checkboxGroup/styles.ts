import styled, { css } from 'styled-components';

const CheckboxGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  user-select: none;
  border-radius: 5px;
  padding-bottom: 1em;

  & div:nth-child(4n + 1):nth-last-child(-n + 4) {
    border-bottom-left-radius: 5px;
    border-left: 1px solid #efefef;
  }

  & div:last-child {
    border-bottom-right-radius: 5px;
  }

  /* & div:nth-child(4n + 1):nth-last-child(-n + 4),
  & div:nth-child(4n + 1):nth-last-child(-n + 4) ~ div {
    border-bottom: 1px solid #efefef;
  } */
`;

const CheckboxGroupItemWrapper = styled.div`
  ${({ checked, disabled }: { checked: boolean; disabled: boolean }) => css`
    padding: 10px 20px;
    color: ${checked ? '#ff4742' : '#6f6f6f'};
    background-color: ${disabled ? '#FAFAFA' : 'inherit'};
    border-bottom: ${checked ? '4px solid #ff4742' : 'none'};

    ${!disabled &&
      ` 
      cursor: pointer;

      &:hover {
        background-color: #F5F5F5;
      }

      &:active {
        background-color: #ededed;
      }
    `}

    /* border: 1px solid #efefef; */

    border-top: 1px solid #efefef;
    border-right: 1px solid #efefef;

    &:first-child {
      border-top-left-radius: 5px;
      border-left: 1px solid #efefef;
    }

    &:nth-child(4) {
      border-top-right-radius: 5px;
    }

    /* &:nth-child(5) {
    border-bottom-left-radius: 5px;
    border-left: 1px solid #efefef;
  } */

    /* &:last-child {
    border-bottom-right-radius: 5px;
  } */
  `};
`;

const CheckboxGroupItemLabel = styled.span`
  text-align: center;
  justify-self: center;
  align-self: center;
`;

export {
  CheckboxGroupWrapper,
  CheckboxGroupItemWrapper,
  CheckboxGroupItemLabel,
};
