import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import {Provider} from "react-redux";
import { store } from "./store/store";
import {AuthProvider} from "../auth/AuthContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <AuthProvider> 
  <Provider store={store} >
  <QueryClientProvider client={queryClient}>
   <React.StrictMode>
     <App />
   </React.StrictMode>
  </QueryClientProvider>
  </Provider>
  </AuthProvider>
);

// test
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
