/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Alexandre Dev</h1>
        <h2>@alexandredevv</h2>

        <p>
          Programador FullStack <a target="_blank" rel="author">https://github.com/alexandredev3</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Luziânia-Go, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 07 de Abril de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>43</strong>
          </span>
          <span>
            <strong>13 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
