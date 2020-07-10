import React from 'react';

import {
  Container,
  Retweeted,
  RetweetMessage,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetMessage />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Alexandre Dev</strong>
            <span>@alexandredevv</span>
            <Dot />
            <time>10 de jun</time>
          </Header>

          <Description>Clone do Twitter</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              24
            </Status>
            <Status>
              <RetweetIcon />
              8
            </Status>
            <Status>
              <LikeIcon />
              143
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
