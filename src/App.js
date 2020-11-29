import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Main from './pages/Main';
import {useAuth} from './contexts/AuthContext';

function App() {
  const {isReady, currentUser} = useAuth();

  return (
    isReady
      ? currentUser
      ? <Switch>
        <Route path={'/'} component={Main}/>
        <Redirect to={'/'}/>
      </Switch>
      : <Switch>
        <Route path={'/register'} component={Register}/>
        <Route path={'/login'} component={Login}/>
        <Redirect to={'/login'}/>
      </Switch>
      : ''
  );
}

export default App;
