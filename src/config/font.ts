import { css } from 'styled-components';
// @ts-ignore
import * as SNNeoireWoff from '../assets/fonts/SN-NeoNoire/SNNeoNoire-Regular-webfont.woff';
// @ts-ignore
import * as SNNeoireTtf from '../assets/fonts/SN-NeoNoire/SNNeoNoire-Regular-webfont.ttf';

// *Assets
export const fonts = css`
    @font-face{
        font-family: SN-NeoNoire;
        src: 
            url(${SNNeoireWoff}) format("woff"),
            url(${SNNeoireTtf}) format("truetype");
        font-style: normal;
        font-weight:400
    }
`;