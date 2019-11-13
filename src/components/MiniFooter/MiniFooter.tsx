import * as React from 'react';
import {
  Wrapper,
  InnerWrap,
  Text,
  SocialNetworks,
  Logo
} from './styled';

const github = require('../../assets/images/github.svg');
const facebook = require('../../assets/images/facebook.svg');
const twitter = require('../../assets/images/twitter.svg');

export const MiniFooter = () => (
  <Wrapper>
    <InnerWrap>
      <Text>© 2019, Construido por el equipo de Frontendlabs</Text>
      <SocialNetworks>
        <Logo href="https://github.com/orgs/frontend-labs/" target="_blank">
          <img src={github} />
        </Logo>
        <Logo href="https://es-la.facebook.com/frontendlabs.peru/" target="_blank">
          <img src={facebook} />
        </Logo>
        <Logo href="https://twitter.com/frontendlabs" target="_blank">
          <img src={twitter} />
        </Logo>
      </SocialNetworks>
    </InnerWrap>
  </Wrapper>
);