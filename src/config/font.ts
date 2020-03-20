import { css } from 'styled-components';
// @ts-ignore
import * as NunitoWoff from '../assets/fonts/Nunito-latin/nunito-v12-latin-regular.woff';
// @ts-ignore
import * as NunitoTtf from '../assets/fonts/Nunito-latin/nunito-v12-latin-regular.ttf';
// @ts-ignore
import * as NunitoBoldWoff from '../assets/fonts/Nunito-latin/nunito-v12-latin-600.woff';
// @ts-ignore
import * as NunitoBoldTtf from '../assets/fonts/Nunito-latin/nunito-v12-latin-600.ttf';

// *Assets
export const fonts = css`
    @font-face{
        font-family: Nunito-latin;
        src: 
            url(${NunitoBoldWoff}) format("woff"),
            url(${NunitoBoldTtf}) format("truetype");
        font-style: normal;
        font-weight: 600
    }
`;