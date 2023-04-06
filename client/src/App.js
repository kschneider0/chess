import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Login from './components/Auth/Login.js';
import SignUp from './components/Home/SignUp.js';
import Home from './components/Home/Home.js';
import Play from './components/Play.js';
import Social from './components/Social/Social.js';
import About from './components/About.js';

function App() {

    const history = useHistory();

    const initialUserState = {};
    const [user, setUser] = useState(initialUserState);
    const [playComputer, setPlayComputer] = useState(true);
    
    useEffect(() => {
      fetch('/authorized-session')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user));
        };
      });
    }, []);
    
    // route is either '/login' or '/signup'
    const handleLoginSignUp = (event, route) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const dataObj = Object.fromEntries(data.entries());
      fetch(route, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataObj)
        })
        .then(res => {
          if (res.ok) {
            res.json().then(user => setUser(user));
            history.push('/home');
          } else {
            res.json().then(errors => console.log(errors));
          };
        });
      };
      
    const handleLogout = () => {
        fetch('/logout', { method: 'DELETE' })
        .then(res => {
            if (res.ok) setUser(initialUserState);
        });
    };

    const handleClickPlay = (playComputer) => {
        setPlayComputer(playComputer);
    };

    return (
        <>
          <Switch>

            <Route path="/home">
              <Home 
                user={user} 
                onLogout={handleLogout}
                onClickPlay={handleClickPlay}
              />
            </Route>

            <Route path='/play'>
              <Play playComputer={playComputer}/>
            </Route>

            <Route path='/users/:id'>
              <Social 
                user={user}
                onLogout={handleLogout}
                onClickPlay={handleClickPlay}
              />
            </Route>

            <Route path='/about'>
              <About />
            </Route>            

            <Route path="/login">
              <Login onSubmit={handleLoginSignUp} />
            </Route>

            <Route path="/signup">
              <SignUp onSubmit={handleLoginSignUp} />
            </Route>

            <Redirect from='/' to='/login' />

          </Switch>
        </>
    );
}

export default App;
