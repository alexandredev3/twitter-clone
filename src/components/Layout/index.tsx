import React from 'react';

// External Components
import Main from '../Main';

// Styles
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <ManuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
