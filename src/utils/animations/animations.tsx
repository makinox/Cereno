import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    height: 0%;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`;

export const showIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
