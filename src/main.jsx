// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';

// import { persistor, store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter basename="/EasyDrive">
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Modal from "react-modal";
import App from './App.jsx';
import './index.css';

import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/EasyDrive-project">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);