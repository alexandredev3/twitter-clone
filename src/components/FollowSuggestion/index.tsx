import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  data: {
    id: number;
    avatar: string;
    name: string;
    nickname: string;
  }
}

const FollowSuggestion: React.FC<Props> = ({
  data
}) => {
  return (
    <Container>
      <div>
        <Avatar image={data.avatar} />

        <Info>
          <strong>{data.name}</strong>
          <span>{data.nickname}</span>
        </Info>

      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}

export default FollowSuggestion;
