import React from 'react';
import MiniBlockWrapper from '../app1/components/homePage';
import NavBar from '../app1/components/navbar';
// import Circle from '../app1/components/circularProgress';

import { View } from 'react-native';

const App = () => {
  return (
    <View style={{flex : 1}}>
      <MiniBlockWrapper/>
      <NavBar/>
      {/* <Circle/> */}
    </View>
  );
};

export default App;
// 