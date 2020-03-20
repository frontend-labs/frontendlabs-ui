import styled, { createGlobalStyle } from "styled-components";
const mask = require('../../assets/images/mask.png');
import { fonts } from '../../config';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  ${fonts}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 251px;
  background: linear-gradient(265.1deg, #C83660 0.04%, #3A1F5D 100%), #212C66;
  overflow: hidden;
`

export const Logo = styled.img`
  width: 125px;
  height: 70px;
`;

export const Image = styled.div`
  position: absolute;
  opacity: .2;
  width: 100%;
  height: 251px;
  &:before,
  &:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${mask});
    background-size: auto;
    animation: move 10s infinite linear;

  }
  &:before {
    right: 100%;
  }
  @keyframes  move {
    from {transform: translateX(0%);}
    to {transform: translateX(100%);}
  }
`;

export const Tittle = styled.h1`
  font-family: Nunito-latin;
  font-weight: 600;
  font-size: 36px;
  line-height: 37px;
  color: #03BBEB;
  margin: 20px 0 0 0;
`;

export const Center = styled.div`
  position: relative;
  text-align: center;
`;

export const Vol = styled.div`
  font-family: Nunito-latin;
  font-weight: 100;
  display: inline-block;
  position: absolute;
  right: -30px;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  margin-top: 0;
  transform: rotate(-15deg);
`;