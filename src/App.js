import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import {Home} from './Components/Home';
import {Faq} from './Components/Faq';
import {History} from './Components/History';
import {Support} from './Components/Support';
import {GermanHome} from './German-Components/Home';
import {German_Faq} from './German-Components/Faq';
import {German_History} from './German-Components/History';
import {German_Support} from './German-Components/Support';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Routes">
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/history" component={History} />
          <Route path="/support" component={Support} />
          <Route path="/ger/home" component={GermanHome} />
          <Route path="/ger/faq" component={German_Faq} />
          <Route path="/ger/history" component={German_History} />
          <Route path="/ger/support" component={German_Support} />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
