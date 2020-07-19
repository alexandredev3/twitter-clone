import styled from 'styled-components';

// Nos vamos usar esse botão em outras partes do app então precisamos saber em que estilo ele vai estar
interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  /*Se for passado outlined no elemento o bg vai ficar transparente se não vai ficar com
  a cor do twitter*/
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--primary)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;

  &:hover {
    background: ${(props) => (props.outlined ? 'var(--twitter-white-hover)' : 'var(--twitter-light-hover: #2C8ED6)')};
  }
`;
