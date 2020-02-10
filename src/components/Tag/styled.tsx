import styled from "styled-components";

interface props {
  color?: string;
  background?: string;
}

export const Wrapper = styled.div`
  display: inline-block;
  padding: 6px 12px;
  color: ${props => props.color};
  border-radius: 4px;
  background: ${props => props.background};
  margin-right: 14px;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
`;