import styled from 'styled-components';

import avatar from '../../assets/avatar.jpg';

export default styled.div`
  flex-shrink: 0;

  border-radius: 50%;

  background: url(${avatar}), no-repeat;
  background-size: cover;
  background-position: center;
`;
