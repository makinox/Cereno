import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 90px 30px;
  justify-content: center;
`;

export const Card = styled.article`
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    background-color: #fff3cc;
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 150px;
  width: 250px;
  border-radius: 20px;
`;

export const CardTitle = styled.h3`
  margin: 12px 0 6px 0;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CardRating = styled.span`
  margin-left: 3px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 15px;
`;

export const CardTags = styled.span`
  color: #a6a6a6;
  font-size: 15px;
  margin: 0 3px;
`;
