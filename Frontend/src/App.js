import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import LandingPage from './landingPage';
import SignIn from './signIn';
import SignUp from './singUp';
import MainScreen from './mainScreen';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element = { <LandingPage></LandingPage>}></Route>
           <Route path='/SignIn' element = { <SignIn></SignIn>}></Route>
           <Route path='/SignUp' element ={ <SignUp></SignUp>}></Route>
           <Route path='/mainScreen' element = { <MainScreen></MainScreen>}></Route>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
