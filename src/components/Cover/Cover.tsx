import * as React from 'react';
import {
  Wrapper,
  Logo,
  Image,
  Tittle,
  Vol,
  Center,
  GlobalStyle
} from './styled';

const logo = require('../../assets/images/logo.svg');

interface Props {
  name: string;
}

export const Cover: React.FC<Props> = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Image />
      <Center>
        <Logo src={logo} alt=""/>
        <Tittle>Frontendlabs</Tittle>
        <Vol>Vol 2</Vol>
      </Center>
    </Wrapper>
  )
};