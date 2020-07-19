import React, { useState } from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

interface TweetInfos {
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

const Feed: React.FC = () => {

  const [tweets] = useState<TweetInfos[]>([
    {
      id: 1,
      retweeted: false,
      infos: {
        name: 'Alexandre Dev',
        nickname: '@alexandredevv',
        time: 'Jun 4',
        description: 'Black sea coast',
        image: 'https://images.unsplash.com/photo-1588250267645-7100a1c0f087?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=40',
        comment: 24,
        retweets: 8,
        likes: 143
      }
    },
    {
      id: 2,
      retweeted: true,
      infos: {
        name: 'Alexandre Dev',
        nickname: '@alexandredevv',
        time: 'May 22',
        description: 'Mesa Arch Trail, Moab, UT, USA',
        image: 'https://images.unsplash.com/photo-1594121816049-9b5713c9c1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=40',
        comment: 24,
        retweets: 8,
        likes: 143
      }
    },
    {
      id: 3,
      retweeted: false,
      infos: {
        name: 'Alexandre Dev',
        nickname: '@alexandredevv',
        time: 'May 12',
        description: 'Painted Desert, Arizona, USA',
        image: 'https://images.unsplash.com/photo-1594672011233-89974e97b7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=40',
        comment: 43,
        retweets: 15,
        likes: 439
      }
    },
    {
      id: 4,
      retweeted: true,
      infos: {
        name: 'Alexandre Dev',
        nickname: '@alexandredevv',
        time: 'Apr 17',
        description: 'Reinebringen onto the town Reine at Lofoten islands at sunset.',
        image: 'https://images.unsplash.com/photo-1569690324072-c6c46dad3194?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=40',
        comment: 132,
        retweets: 30,
        likes: 844
      }
    }
  ])

  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        {tweets.map(tweet => (
          <Tweet key={tweet.id} data={tweet} />
        ))}
      </Tweets>
    </Container>
  );
}

export default Feed;
