import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from '../utils/getCenter';
import { Logo } from '../images/svgs/Logo';
import { theme } from '../globalAccets/theme';
import { fontFamily } from '../globalAccets/fontFamily';
import {device} from '../globalAccets/breakingPoints';
import{ NavText} from './atoms/NavText';



const navText = ['about us', 'stories', 'contact', 'login']

export const TopNav = (props) => {

  const TopNavArray = navText.map((item, index) => {
    return <NavText key={index} text={item}/>
  })

    return (
        <Col sm={{span: 24}}>
        <StyledTopNav>
          <Logo/>
          <StyledNavs>
            {TopNavArray}
            <StyledButton>sign up</StyledButton>
          </StyledNavs>
        </StyledTopNav>
      </Col>
    );
};


const StyledButton = styled.button`
  border: none;
  background-color: ${theme.primaryColor};
  color: #fff;
  font-family: ${fontFamily.roboto};
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
  padding: 8.5px 16.08px;
  border-radius: 4px;
  cursor: pointer;

  &:focus{
    outline: none;
  }

  @media ${device.tablet}{
    font-size: 1vw;
  }
`

const StyledTopNav = styled.header`
  width: 80%;
  margin: 0 auto;
  padding: 30px 0px 29px 0px ;
  ${getCenter({
    justifyContent: 'space-between'
  })};


@media ${device.tablet}{
  width: 80%;
  padding: 20px 0px 29px 0px ;
}
`

const StyledNavs = styled.div`
  display: none;

  & a:nth-last-child(2){
    margin-right: 13px;
  }

  @media ${device.tablet}{
    ${getCenter()};
  }
`