import styled, { css } from 'styled-components';

import AvatarImage from '../AvatarImage';

import { Chat, Retweet, Favorite } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;


export const RetweetMessage = styled(Retweet)`
  width: 16px;
  height: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled(AvatarImage)`
  width: 49px;
  height: 49px;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;
  /*nowrap ele não vai quebrar linha de jeito nenhum*/

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    /*
    * text-overflow: ellipsis; Quando a tela fica muito pequena ele coloca os
    tres pontinhos.
    * overflow: hidden; Ele vai escoder o text e permitir os tres pontinhos.
     */
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;

  margin: 0 10px;

  background: var(--gray);
`;

export const Description = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  /**Ela vai ter um maximo de altura de 285px, e um minimo de 175px
    ele vai ficar variando entre 285px e 175px respeitando o 41vw
   */

  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: .7;
  }

  background: var(--gray);
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  /*
    * flex-wrap: wrap; Eles vão quebrando para se encaixar.
  */
  margin: 11px auto 0;
  width: 100%; /**Mobile */

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center; /**Os icons vão ficar alinhados com os textos */

  font-size: 14px;
  color: var(--gray);

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &, > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    &, > svg path {
      color: var(--retweet);
    }
  }
  &:nth-child(3) {
    &, > svg path {
      color: var(--like);
    }
  }
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Retweet)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
