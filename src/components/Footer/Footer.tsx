import * as React from 'react';
import {
  Wrapper,
  InnerWrap,
  Information,
  SocialNetworks,
  Icon
} from './styled';

const iconGitHub = require('../../assets/images/github.svg');
const iconFacebook = require('../../assets/images/facebook.svg');
const iconTwitter = require('../../assets/images/twitter.svg');

export const Footer = () => (
  <Wrapper>
    <InnerWrap>
      <Information>© {(new Date().getFullYear())}, Construido por el equipo de Frontendlabs </Information>
      <SocialNetworks>
        <a href="https://github.com/frontend-labs/frontendlabs-ui" target="_blank">
          <Icon src={iconGitHub} alt=""/>
        </a>
        <a href="https://www.facebook.com/frontendlabs.peru/" target="_blank">
          <Icon src={iconFacebook} alt=""/>
        </a>
        <a href="https://twitter.com/frontendlabs?lang=es" target="_blank">
          <Icon src={iconTwitter} alt=""/>
        </a>
      </SocialNetworks>
    </InnerWrap>
  </Wrapper>
);