import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

interface Users {
  id: number;
  avatar: string;
  name: string;
  nickname: string;
}

const SideBar: React.FC = () => {
  const [users] = useState<Users[]>([
    {
      id: 1,
      avatar: 'https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg',
      name: 'Rocketseat',
      nickname: '@rocketseat'
    },
    {
      id: 2,
      avatar: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
      name: 'React',
      nickname: '@reactjs'
    },
    {
      id: 3,
      avatar: 'https://pbs.twimg.com/profile_images/1282722751980208128/da9_ukvj_400x400.jpg',
      name: 'Larissa Costa',
      nickname: '@laricostaq'
    },
  ]);

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>

    <StickyBox>
      <Body>
        <List
          title="Talvez você curta!"
          elements={
            users.map(user => (
              <FollowSuggestion key={user.id} data={user}/>
            ))
          }
        />

        <List
          title="O que está acontecendo"
          elements={[
            <News name="Leganes vs Real Madrid" />,
            <News name="Yoda" />,
            <News name="Mario" />,
            <News name="A transição capilar da Maisa tem inspirado muita gente em um difícil processo" />,
            <News name="Panico" />,
            <News name="CBLoL 2020: Veja os Tweets sobre os jogos deste domingo" />
          ]}
        />
      </Body>
    </StickyBox>
    </Container>
  );
};

export default SideBar;
