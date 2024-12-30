// //import : react components
// import React from 'react';
// import {Provider} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
// //import : third parties
// import Toast from 'react-native-toast-message';
// //import : config
// import {toastConfig} from 'src/config/toastConfig';
// //import : nav
// import DrawerStack from 'navigation/DrawerStack/DrawerStack';
// //import : redux
// import {store} from 'src/redux/store/store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <DrawerStack />
//         <Toast config={toastConfig} />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

// // https://compilesoftware.com/ess/collection

import React from 'react';
import DrawerStack from 'navigation/DrawerStack/DrawerStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default App;
