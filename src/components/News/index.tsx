import React from 'react';

import { Container } from './styles';

interface Props {
  name: string;
}

const News: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <span>Assuntos do momento no Brasil</span>
      <strong>{name}</strong>
    </Container>
  );
}

export default News;
