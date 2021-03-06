import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import MyPage from './components/views/MyPage'
import Auth from './hoc/auth';
import NavBar from './components/views/NavBar/NavBar';
import ListAdd from './components/views/List/ListAdd'
import ListDetailPage from './components/views/List/ListDetailPage'
function App() {
  
  return (
    <Router>
      <div>
      <NavBar/>
        <Route exact path="/" component={Auth(LandingPage, null )} /> {/* 방법1 */}
        <Route exact path='/login' component={Auth(LoginPage, false)}/>
        <Route exact path='/register' component={Auth(RegisterPage, false)}/>
        <Route exact path='/myPage' component={Auth(MyPage,true)}/>
        <Route exact path='/listAdd' component={Auth(ListAdd,true)}/>
        <Route exatch path='/detailPage' component={Auth(ListDetailPage,null)}/>
        {/* <Route exact path="/register">
          <RegisterPage /> 방법2
        </Route>  */} 
        
        {/* <Route exact path="/login">
          <LoginPage />     방법2                
        </Route> */}

      </div>
    </Router>
  );
}



export default App;
