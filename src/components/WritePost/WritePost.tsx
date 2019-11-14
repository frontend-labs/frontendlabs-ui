import * as React from 'react';
import {
  Wrapper,
  InnerWrap,
  Title,
  Information
} from './styled';

export const WritePost = () => (
  <Wrapper>
    <InnerWrap>
      <Title>¿Quieres escribir una publicación?</Title>
      <Information>Por favor lea nuestra guía de contribución.</Information>
    </InnerWrap>
  </Wrapper>
);