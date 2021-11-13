import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import App from './App';
import NoSupport from './NoSupport';
import "./Styles/main.css";
import AppSettings from "./AppSettings";

const Settings: AppSettings = new AppSettings();

if ( window.screen.width < 1024 || Settings.AllowSmallScreens ) {

  ReactDOM.render(
    <React.StrictMode>
      <NoSupport />
    </React.StrictMode>,
    document.getElementById('root')
  )

} else {

  ReactDOM.render(
    <React.StrictMode>
      <RecoilRoot>
         <App />
      </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
  )
}