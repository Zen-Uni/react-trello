import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './components/Container';
import Main from './view/Main'

// config router
function App() {
  return (
    <Router>
      <Switch>
        {/* main page */}
        <Route path="/">
          <Main>
            <Route path="/user" exact>
              <Container/>
            </Route>
          </Main>
        </Route>


        <Route path='/login' exact>
          <div>login</div>
        </Route>

        <Router path="*">
          <div>404 not found</div>
        </Router>
      </Switch>
    </Router>
  )
}



export default App;
