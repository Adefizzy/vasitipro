
import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from '../utils/getCenter';
import { device } from '../globalAccets/breakingPoints';
import { theme } from '../globalAccets/theme';
import { fontFamily } from '../globalAccets/fontFamily';
import image2 from '../images/image2.png'
import underline from '../images/underline.png';


export const ProfileSection = (props) => {
    return (
        <Col sm={{span: 24}}>
          <StyledProfileDiv>
           {props.children}
          </StyledProfileDiv>
      </Col>
    );
};

export const Profile = (props) => {
    
    return (
        <StyledProfile>
        <StyledImageDiv>
          <StyledImage src={image2} alt='image'/>
        </StyledImageDiv>
        <h2>{props.data.name}</h2>
        <StyledLocation>
          <p>{props.data.location}</p>
          <StyledTag isCustomer= {props.data.type === 'customer'}>{props.data.type}</StyledTag>
        </StyledLocation>
        <StyledDescription>{props.data.description}</StyledDescription>
      </StyledProfile>
    )
}


const StyledProfileDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  ${getCenter({justifyContent: 'space-between'})}
  padding: 75px 0;
`

const StyledProfile = styled.div`
  flex-basis: 100%;
  font-family: ${fontFamily.inter};
  margin-bottom: 72px;

  & h2{
    font-weight: 600;
    color: ${theme.black};
    margin-bottom: 0px;
  }

  @media ${device.laptop}{
    flex-basis: 30%;
    
  }
  
`

const StyledImageDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${theme.lightOrange};
  overflow: hidden;
  margin-bottom: 32px;

  @media ${device.laptop}{
    width: 16vw;
    height: 16vw;
    
  }
  
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const StyledLocation = styled.div`
  ${getCenter()};
  width: fit-content;
  font-family: ${fontFamily.inter};
  font-weight: 500;

  & p{
    font-size: 15px;
    color: ${theme.black};
    letter-spacing: 0.05em;
  }

  @media ${device.laptop}{
    & p{
    font-size: 1.2vw;
    
  }
  }
`

const StyledTag = styled.div`
  background-color: ${props => props.isCustomer? theme.customerFaint: theme.vendorFaint};
  color: ${props => props.isCustomer ? theme.customerBold: theme.vendorBold};
  margin-left: 20px;
  padding: 7px 9px;
  font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.02em;
  border-radius: 5px;
  text-transform: uppercase;



  @media ${device.laptop}{
    font-size: 1vw;
  }
`

const StyledDescription = styled.p`
  font-family: ${fontFamily.inter};
  font-weight: 400;
  font-size: 16px;
  color: ${theme.black};
  width: 90%;
  letter-spacing: 0.02em;
  @media ${device.laptop}{
    font-size: 1.2vw;
  }
`