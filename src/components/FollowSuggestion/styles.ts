import styled from 'styled-components';

import Button from '../Button';

interface Props {
  image: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div<Props>`
  width: 49px;
  height: 49px;

  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  border-radius: 50%;
  margin-right: 10px;
` as React.FC<Props>;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;
