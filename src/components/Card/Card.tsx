import * as React from 'react';
import p from 'prop-types';
import {
  Wrapper,
  Head,
  CardHead,
  Author,
  Avatar,
  Date,
  Title
} from './styled';
import { Tag } from '../Tag/Tag';

interface Props {
  url: string;
  author: string;
  avatar: string;
  date: string;
  title: string;
  tags: string[];
}

export const Card: React.FC<Props> = ({
  url,
  author,
  avatar,
  date,
  title,
  tags
}) => {
  return (
    <Wrapper href={url} title={title}>
      <Head>
        <CardHead>
          <Avatar src={avatar}></Avatar>
          <Author>{author}</Author>
        </CardHead>
        <Date>{date}</Date>
      </Head>
      <Title>{title}</Title>
      {tags.map(tag => (
        <Tag name={tag} />
      ))}
    </Wrapper>
  )
};

Card.propTypes = {
  url: p.string.isRequired,
  author: p.string.isRequired,
  avatar: p.string.isRequired,
  date: p.string.isRequired,
  title: p.string.isRequired,
  tags: p.string.isRequired
  };