import styled from 'styled-components';
import image from 'gatsby-image';
import { showIn } from '../../utils/animations/animations';

export const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px 20px;
`;

export const Image = styled(image)`
  cursor: pointer;
  width: 100%;
  max-width: 800px;
  border-radius: 20px;
  animation: 1s ${showIn};
`;
