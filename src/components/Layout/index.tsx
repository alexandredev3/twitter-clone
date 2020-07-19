import React from 'react';

// External Components
import ManuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

// Styles
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ManuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
