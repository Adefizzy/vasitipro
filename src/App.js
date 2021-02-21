import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { getCenter } from './utils/getCenter';
import { Logo } from './images/svgs/Logo';
import { theme } from './globalAccets/theme';
import { fontFamily } from './globalAccets/fontFamily';
import {device} from './globalAccets/breakingPoints';
import { TopNav } from './Components/TopNav';
import { SubNav } from './Components/SubNav';
import { FirstBanner } from './Components/FirstBanner';
import { SecondBanner } from './Components/SecondBanner';
import { Button } from 'antd';
import underline from './images/underline.png';
import image2 from './images/image2.png';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from './Components/HomePage';
import { DataForm } from './Components/DataForm';
import  { UseDataContext, DataContext} from './DataContext.js';




function App() {
  const [dataBase, setDataBase] = React.useState([]);

  return (
    <DataContext.Provider value={{dataBase, setDataBase}}>
    <Switch>
      <Route exact  path='/'>
        <HomePage/>
      </Route>
      <Route path='/form'>
        <DataForm/>
      </Route>
    </Switch>
    </DataContext.Provider>
  );
}



















export default App;
