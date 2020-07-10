import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/icons';

import AvatarImage from '../AvatarImage';
import banner from '../../assets/banner.jpg';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;
  /*Se for muito grande eu vou mandar ele scrollar*/

  scrollbar-width: none; /*Para o firefox*/
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  /**para não diminuir o tamanho como se fosse encolher. */

  width: 100%;
  height: min(33vw, 199px);

  background: url(${banner}), no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
`;

export const Avatar = styled(AvatarImage)`
  /**Formulá para deixar a imagem responsiva */
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  /**Vai ser um minimo de 45 de largura, e o max de 135px baseado em 22vw */

  border: 3.75px solid var(--primary);

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  /**min(calc(10vw + 7px), 67px): top
    16px: left
    0: right
   */

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    /**Caso tenha algum link na bio */
    > a {
      text-decoration: none;
      color: var(--twitter);

      cursor: pointer;
    }
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);

        margin-right: 5px;
      }
    }
  }

`;

const iconCss = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCss}
`;
export const CakeIcon = styled(Cake)`
  ${iconCss}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    /**Depois do primeiro span ele vai colocar esse estilo */
    & + span {
      margin-left: 20px;
    }
  }
`;
