import styled from "styled-components";

export const Wrapper = styled.a`
  display: block;
  width: 336px;
  height: 180px;
  left: 364px;
  top: 532px;
  border-radius: 4px;
  box-shadow: 0px 1px 6px 1px #dcdcdc;
  padding: 15px;
  overflow: hidden;
  color: #000;
  text-decoration:none;
  &: hover {
    background: #f5f5f5;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  background-color: yellow;
  border-radius: 50%;
  margin-right: 13px;
`;

export const Author = styled.h2`
  font-family: Arial;
  font-size: 14px;
  line-height: 16px;
  margin: 0;
`;

export const Date = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: #828282;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;