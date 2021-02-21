import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from '../utils/getCenter';
import { device } from '../globalAccets/breakingPoints';

import { NavText } from './atoms/NavText';

const subNavText = [
  'marketplace',
  'wholesale center',
  'seller center',
  'services',
  'intership',
  'events',
];

export const SubNav = (props) => {
  const subNavArray = subNavText.map((item, index) => (
    <NavText isSub={true} key={index} text={item} />
  ));

  return (
    <StyledSubNav sm={{ span: 24 }}>
      <div>{subNavArray}</div>
    </StyledSubNav>
  );
};

const StyledSubNav = styled(Col)`
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.04);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 18px 0px;
  display: none;

  & > div {
    width: 60%;
    margin: 0 auto;
    ${getCenter({ justifyContent: 'space-between' })};
  }

  @media ${device.tablet} {
    display: block;
  }
`;
