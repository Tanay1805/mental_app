import React from 'react';
// import MiniBlockWrapper from '../app1/components/homePage';
// import NavBar from '../app1/components/navbar';
// import Circle from '../app1/components/circularProgress';
import StatisticPage from '../app1/components/statistics';
import Sleep  from './components/sleep';

import { View } from 'react-native';
import NavBar from './components/navbar';

const App = () => {
  return (
    <View style={{flex : 1}}>
      {/* <MiniBlockWrapper/> */}
      {/* <NavBar/> */}
      {/* <Circle/> */}
      {/* <StatisticPage/> */}
      <Sleep />
      <NavBar/>
    </View>
  );
};

export default App;
// 