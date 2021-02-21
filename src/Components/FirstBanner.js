import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from '../utils/getCenter';
import { device } from '../globalAccets/breakingPoints';
import { theme } from '../globalAccets/theme';
import { fontFamily } from '../globalAccets/fontFamily';
import image1 from '../images/imgae1.png'

export const FirstBanner = (props) => {
  
    return (
        <Col xs={{span: 24}} style={{position: 'relative', overflowY: 'hidden'}}>
        <StyledFirstBanner>
         <StyledTextDiv>
           <h1 >
             Amazing Experiences from Our Wonderful Customers
           </h1>
           <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
         </StyledTextDiv>
         <StyledImageDiv>
           <StyledImage src={image1} alt='image'/>
           <Eclipse2></Eclipse2>
         </StyledImageDiv>
        </StyledFirstBanner>
        <Eclipse></Eclipse>
      </Col>
    );
};

const StyledFirstBanner = styled.div`
  
  margin: 0 auto;
 
  ${getCenter({justifyContent: 'space-between'})};


  @media ${device.laptop}{
    padding-top: 50px;
    width: 80%;
  }
  
`
const StyledTextDiv = styled.div`
  font-family: ${fontFamily.inter};
  flex-basis: 100%;
  padding: 0px 20px;
  & h1{
    font-weight: 700;
    font-size: 32px;
    color: ${theme.boldBlack}
  }

  & p{
    font-weight: 400;
    color: #494949;
    font-size: 18px;

  }

  @media ${device.tablet}{
    padding: 0px 0px;
    flex-basis: 80%;
    margin: 20px auto;
    & p{
      width: 75%;
    }
  }
  @media ${device.laptop}{
    flex-basis: 50%;
    margin: 0px auto;
    & h1{
      font-size: 3.5vw;
    }

    & p{
      font-size: 1.3vw;
      width: 85%;
    }
    
  }
`
const StyledImageDiv = styled.div`
  height: 100%;
  flex-basis:100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  ${getCenter()};


  @media ${device.laptop}{
    flex-basis: 43%;
  }
`
const StyledImage = styled.img`
  width: 115%;
  height: auto;

  @media ${device.laptop}{
    width: 105%;
  }
`

const Eclipse = styled.div`
  width: 49vw;
  height: 49vw;
  border-radius: 50%;
  background-color: ${theme.lightOrange};
  position: absolute;
  z-index: -1;
  right: 5%;
  top: 15%;
  border-bottom-color: transparent;
  display: none;

  @media ${device.laptop}{
    display: block;
  }
`

const Eclipse2 = styled.div`
  width: 120vw;
  height: 120vw;
  border-radius: 50%;
  background-color: ${theme.lightOrange};
  position: absolute;
  z-index: -1;
  right: -10%;
  top: 10%;
  border-bottom-color: transparent;
  @media ${device.laptop}{
    display: none;
  }
`