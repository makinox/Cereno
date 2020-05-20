import styled from 'styled-components';

interface ItemProps {
  readonly activate: boolean;
}

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 10px 30px;
`;

export const Item = styled.article<ItemProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 20px 10px;
  margin: 0 10px;
  border-radius: 40px;
  flex-direction: column;
  background-color: ${(p: any) => (p.activate ? '#fbd661' : '#fff')};
  box-shadow: 20px 10px 30px 0 rgba(0, 0, 0, 0.1);

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    background-color: #fff0c4;
  }
`;

export const ItemIcon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  margin: 5px 0 25px 0;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const ItemTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;
