import React from 'react';

import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/mini-logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Vitor Araujo</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/vitoraraujo.dev@gmail.com.png"
              alt="Vitor Araujo"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
