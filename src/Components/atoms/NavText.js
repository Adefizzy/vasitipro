import  React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalAccets/theme';
import { fontFamily } from '../../globalAccets/fontFamily';
import {device} from '../../globalAccets/breakingPoints';

export const NavText = (props) => {
    return (
        <StyledAnchor isSub={props.isSub} href='#'>
            {props.text}
        </StyledAnchor>
    );
};


const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: ${props => props.isSub? theme.black: theme.navBlack};
  font-family: ${fontFamily.roboto};
  font-weight: 400;
  font-size: 13px;
  margin-right: ${props => props.isSub? '0px': '40px'};
  text-decoration: none;


  @media ${device.tablet}{
    font-size: 1vw;
  }
`