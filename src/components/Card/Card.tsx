import * as React from 'react';
import * as p from 'prop-types';
import styled from 'styled-components';

import {
  Wrapper,
  Head,
  CardHead,
  Author,
  Avatar,
  Date,
  Title,
  styles
} from './styled';

import { Tag } from '../Tag/Tag';

interface Props {
  url: string;
  author: string;
  avatar: string;
  date: string;
  title: string;
  tags: string[];
  renderLink: any;
}

export const Card: React.FC<Props> = ({
  url,
  renderLink,
  author,
  avatar,
  date,
  title,
  tags,
}) => {
  const Component = renderLink ? styled(renderLink)`${styles}` : Wrapper;
  const maxTags = tags.slice(0, 2);
  return (
    <Component href={url}>
      <div>
        <Head>
          <CardHead>
            <Avatar src={avatar}></Avatar>
            <Author>{author}</Author>
          </CardHead>
          <Date>{date}</Date>
        </Head>
        <Title>{title}</Title>
      </div>

      <div>
        {maxTags.map((tag , key)=> (
          <Tag name={tag} key={key} />
        ))}
      </div>
    </Component>
  )
};

Card.propTypes = {
  url: p.string,
  renderLink: p.node,
  author: p.string.isRequired,
  avatar: p.string.isRequired,
  date: p.string.isRequired,
  title: p.string.isRequired,
  tags: p.arrayOf(p.string).isRequired
};