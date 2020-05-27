import React from 'react';
import { Image, BannerContainer } from './styles';

export default ({ imageFluid, onClick }: { imageFluid: any; onClick: any }) => (
  <BannerContainer onClick={onClick}>
    <Image fluid={imageFluid} alt="Banner photos" />
  </BannerContainer>
);
