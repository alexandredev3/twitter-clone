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

interface Props {
  data: {
    id: number;
    retweeted: boolean;
    infos: {
      name: string;
      nickname: string;
      time: string;
      description: string;
      image: string;
      comment: number;
      retweets: number;
      likes: number;
    }
  }
}

const Tweet: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Retweeted>
        {data.retweeted && (
          <>
          <RetweetMessage />
          <p>Você retweetou</p>
          </>
        )}
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>{data.infos.name}</strong>
            <span>{data.infos.nickname}</span>
            <Dot />
            <time>{data.infos.time}</time>
          </Header>

          <Description>{data.infos.description}</Description>

          <ImageContent image={data.infos.image} />

          <Icons>
            <Status>
              <CommentIcon />
              {data.infos.comment}
            </Status>
            <Status>
              <RetweetIcon />
              {data.infos.retweets}
            </Status>
            <Status>
              <LikeIcon />
              {data.infos.likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
