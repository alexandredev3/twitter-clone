import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomManu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>AlexandreDev</strong>
          <span>48 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      <BottomManu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomManu>
    </Container>
  );
}

export default Main;
