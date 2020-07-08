import styled, { css } from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from '../../styles/icons';

export const Container = styled.div`
 /*Os elementos vem de cima para baixo, por isso column*/
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 9999;
  /**Precisamos colocar esse z-index para ele ficar por cima de tudo. */
  position: sticky; /*Ele vai ficar fixo no topo*/
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-white-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomManu = styled.div`

`;

// Estamos colocar um css para todos os icons juntos.
const iconCss = css`
  width: 31px;
  height: 31px;
`;

export const HomeIcon = styled(Home)`
  ${iconCss}
`;
export const SearchIcon = styled(Search)`
  ${iconCss}
`;
export const BellIcon = styled(Notifications)`
  ${iconCss}
`;
export const EmailIcon = styled(Email)`
  ${iconCss}
`;
