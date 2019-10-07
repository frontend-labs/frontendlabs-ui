import * as React from 'react';
import { Wrapper } from './styled';
import { tags } from './config';
import p from 'prop-types';

interface Props {
  name: string;
}

export const Tag: React.FC<Props> = ({ name }) => {
  const { color, background, nameTag } = tags[name.toLowerCase()] || tags.other;
  return (
    <Wrapper color={color} background={background} >
      # {nameTag || name}
    </Wrapper>
  )
};

Tag.propTypes = {
  name: p.string.isRequired
};