import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: auto;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background: ${({ bgcolor }) => (bgcolor ? bgcolor : 'var(--primary-color)')};
  color: ${({ color }) => (color ? color : '#fff')};
  font-size: 16px;
  font-weight: 600;

  box-shadow: 0px -1px 5px 0px rgba(13, 40, 110, 0.75);
  -webkit-box-shadow: 0px -1px 5px 0px rgba(13, 40, 110, 0.75);
  -moz-box-shadow: 0px -1px 5px 0px rgba(13, 40, 110, 0.75);

  &:hover {
    cursor: pointer;
    background: var(--secondary-color);
  }
`;
