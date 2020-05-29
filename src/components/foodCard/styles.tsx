import styled from 'styled-components';
import { fadeIn } from '../../utils/animations/animations';
import Image from 'gatsby-image';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  /* margin: 30px 30px; */
  justify-content: center;
`;

export const CardOverlay = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(251, 214, 97, 0.9);

  &:active {
    background-color: rgba(251, 214, 97, 0.95);
  }
`;

export const Card = styled.article`
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  margin: 10px;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    background-color: #fff3cc;
  }

  &:hover ${CardOverlay} {
    animation: 0.3s ${fadeIn};
    opacity: 1;
  }
`;

export const CardMedia = styled.div`
  display: flex;
  position: relative;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  height: 120px;
  width: 200px;
  border-radius: 20px;
`;

export const CardTime = styled.span`
  position: absolute;
  width: 60%;
  font-weight: 600;
  padding: 10px 0 10px 5px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const CardTitle = styled.h3`
  margin: 12px 0 6px 0;
  font-size: 16px;
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

export const CardOverlayText = styled.span`
  text-align: center;
  margin: 10px 0;
  font-size: 20px;
  color: #000;
`;
