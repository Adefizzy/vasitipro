import React from 'react';
import { Row} from 'antd';
import { TopNav } from './TopNav';
import { SubNav } from './SubNav';
import { FirstBanner } from './FirstBanner';
import { SecondBanner } from './SecondBanner';
import { UseDataContext } from '../DataContext';


import { ProfileSection, Profile } from './Profile';



const data = [
    {
        name: 'Joseph Ike',
        location: 'Ikeja',
        type: 'customer',
        description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'

    },

    {
        name: 'Joseph Ike',
        location: 'Ikeja',
        type: 'vendor',
        description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'

    },
    {
        name: 'Joseph Ike',
        location: 'Ikeja',
        type: 'vendor',
        description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'

    },
    {
        name: 'Joseph Ike',
        location: 'Ikeja',
        type: 'vendor',
        description: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.'

    }
]

export const HomePage = (props) => {
    const {dataBase, setDataBase} = UseDataContext();

    const userList = dataBase.map((item, index) => {
        return (
            <Profile key={index} data={item}/>
        )
    })

    const onClick= () => {
        alert('dbdj')
    }
    return (
        <Row >
      <TopNav/>
      <SubNav/>
      <FirstBanner/>
      <SecondBanner onClick={onClick}/>
      <ProfileSection>
        {userList}
      </ProfileSection>
    </Row>
    );
};