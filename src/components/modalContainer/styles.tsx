import styled from 'styled-components';

interface ItemProps {
  readonly full: boolean;
}

export const ModalContainer = styled.section<ItemProps>`
  display: flex;
  position: absolute;
  align-items: flex-start;
  justify-content: center;
  ${(p: any) => (p.full ? 'background-color: #fdfdfb;' : '')};
  ${(p: any) => (p.full ? 'top: 0' : '')};
  ${(p: any) => (p.full ? 'left: 0' : '')};
  ${(p: any) => (p.full ? 'right: 0' : 'right: 20px')};
  bottom: 0;
`;

export const WhiteSpace = styled.div`
  background-color: #fff;
  padding: 100px;
`;
