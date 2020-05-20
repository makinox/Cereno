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

export const CardMedia = styled.div`
  display: flex;
  position: relative;
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 150px;
  width: 250px;
  border-radius: 20px;
`;

export const CardTime = styled.span`
  position: absolute;
  width: 40%;
  padding: 10px 0 10px 5px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
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
