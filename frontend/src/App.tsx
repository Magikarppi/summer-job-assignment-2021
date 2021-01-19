import React, { useState, useEffect, FC, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Beanies from './components/beanies/Beanies';
import Facemasks from './components/facemasks/Facemasks';
import Gloves from './components/gloves/Gloves';
import NavBar from './components/NavBar';
import AvailabilityProvider, {
  AvailabilityContext,
} from './context/availabilityContext';
import { AvailabilityType } from './types';
import { getAvailability } from './utils/utils';

const App: FC = () => {
  const state = useContext(AvailabilityContext);

  // useEffect(() => {
  //   console.log('useeffect runs');
  //   const runGetAvailabilities = async () => {
  //     try {
  //       const fetchedAvs = await getAvailability('hennex');
  //       const x: AvailabilityType[] = [];
  //       fetchedAvs.map((item: { id: string; DATAPAYLOAD: string }) => {
  //         const n: { id: string; inStockValue: string } = {
  //           id: item.id,
  //           inStockValue: item.DATAPAYLOAD.split('<INSTOCKVALUE>')[1].split(
  //             '</INSTOCKVALUE>'
  //           )[0],
  //         };
  //         return x.push(n);
  //       });
  //       console.log('x', x);
  //       state.setHennex(x);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   runGetAvailabilities();
  // }, []);
  // useEffect(() => {
  //   console.log('useeffect runs');
  //   const runGetAvailabilities = async () => {
  //     try {
  //       const fetchedAvs = await getAvailability('hennex');
  //       const x: AvailabilityType[] = [];
  //       fetchedAvs.map((item: { id: string; DATAPAYLOAD: string }) => {
  //         const n: { id: string; inStockValue: string } = {
  //           id: item.id,
  //           inStockValue: item.DATAPAYLOAD.split('<INSTOCKVALUE>')[1].split(
  //             '</INSTOCKVALUE>'
  //           )[0],
  //         };
  //         return x.push(n);
  //       });
  //       console.log('x', x);
  //       state.setHennex(x);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   runGetAvailabilities();
  // }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/products/gloves">
            <Gloves />
          </Route>
          <Route path="/products/facemasks">
            <Facemasks />
          </Route>
          <Route path="/products/beanies">
            <Beanies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
