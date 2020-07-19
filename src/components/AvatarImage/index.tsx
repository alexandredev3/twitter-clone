import styled, { css } from 'styled-components';

import Avatar from '../../assets/avatar.jpg';

const ImageCSS = css`
  flex-shrink: 0;

  border-radius: 50%;

  background: url(${Avatar}), no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProfileAccount = styled.div`
 ${ImageCSS}
`;
