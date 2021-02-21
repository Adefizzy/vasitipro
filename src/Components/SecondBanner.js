import React, {useRef, useEffect} from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from '../utils/getCenter';
import { device } from '../globalAccets/breakingPoints';
import { theme } from '../globalAccets/theme';
import { fontFamily } from '../globalAccets/fontFamily';
import image2 from '../images/image2.png'
import underline from '../images/underline.png';
import {useHistory} from 'react-router-dom';



export const SecondBanner = (props) => {
    const history = useHistory()

    const buttonRef = useRef()

    const handleDivClick = () => {
       
        history.push('/form')
    }

    const handleClick = () => {
        console.log('jhdbqjjeb')
      }
      

      

    return (
        <>
        <Col sm={{span: 24}}>
        <StyledSecondBanner>
          <StyledInnerDiv>
            <BannerImage>
              <StyledImage src={image2} alt=''/>
              <Eclipse2></Eclipse2>
            </BannerImage>
            <BannerMessage >
              <h1>Tolu &amp; Joy’s Experience</h1>
              <StyledTranparentButton>Customer</StyledTranparentButton>
              <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
            
              <UnderlinedButto onClick={handleDivClick} ref={buttonRef} >
                <StyledBorderlessButton>Share your own story!</StyledBorderlessButton>
                <StyledUnderline src={underline}/>
              </UnderlinedButto>
            </BannerMessage>
          </StyledInnerDiv>
          <Eclipse></Eclipse>
        </StyledSecondBanner>
       
      </Col>
      
      </>
    );
};


const StyledSecondBanner = styled.div`
  background-color: ${theme.customerBlack};
  padding-top: 64px; 
  width: 100%;
  position: relative;
  /* z-index: -2; */
  overflow-y: hidden;
  
`
const StyledInnerDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  ${getCenter({flexDirection: 'column'})};
  

  @media ${device.laptop}{
    ${getCenter({justifyContent: 'space-between'})};
  }
`

const BannerMessage = styled.div`
  flex-basis: 40%;
  font-family: ${fontFamily.inter};
  color: #fff;
  order: 1;

  & h1{
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 5px;
  }

  & p{
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin-top: 32px;
  }

  @media ${device.laptop}{
    order: 2;
    & h1{
      font-size: 2.2vw;
    }

    & p{
      font-size: 1.3vw;
      width: 90%;
    
    }
  }
`



const StyledTranparentButton = styled.button`
  font-weight: 500;
  font-family: ${fontFamily.inter};
  text-transform: uppercase;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  border-radius: 5px;
  padding: 7px 9px;
  font-size: 13px;
  cursor: pointer;

  &:focus{
    outline: none;
  }

  @media ${device.laptop}{
    font-size: 0.9vw;
  }
`

const StyledBorderlessButton = styled.button`
  font-weight: 500;
  font-family: ${fontFamily.inter};
  text-transform: uppercase;
  border: none;
  color: #fff;
  background-color: transparent;
  border-radius: 5px;
  padding: 7px 9px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:focus{
    outline: none;
  }
`
const UnderlinedButto = styled.div`
  width: 100%;
  cursor: pointer;

  @media ${device.laptop}{
    width: 80%;
  }
  @media ${device.laptopL}{
    width: 50%;
    cursor: pointer;
  }
`
const StyledUnderline = styled.img`
  width: 100%;
`

const BannerImage = styled.div`
 flex-basis: 50%;
 order:2;
 z-index: 200;
 position: relative;

 @media ${device.laptop}{
   order: 1;
  /*  z-index: 0; */
 }
`

const StyledImage = styled.img`
  width: 100%;
  z-index: 200;
`
const Eclipse = styled.div`
  width: 42vw;
  height: 42vw;
  border-radius: 50%;
  background-color: #2E2E2E;
  position: absolute;
  top: 10%;
  left: 9%;
  z-index: 100;
  display: none;

  @media ${device.laptop}{
    display: inline-block;
    
  }
`

const Eclipse2 = styled.div`
  width: 120vw;
  height: 120vw;
  border-radius: 50%;
  background-color: #2E2E2E;
  position: absolute;
  top: 10%;
  left: -20%;
  z-index: -1;
  

  @media ${device.laptop}{
    display: none;
  }
`
