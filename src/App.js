import './App.css';
import React from 'react';
import Form from './components/from';
import DetailsList from './components/list';
import {BrowserRouter as Router,Switch ,Route,Link} from 'react-router-dom'

class App extends React.Component{
  render(){
  return (
    <div>

      <Router>
        <Switch>
            <Route exact path='/' component={Form}/>
            <Route exact path='/list' component={DetailsList}/>
        </Switch>
    </Router>

    </div>
  );
  }
}

export default App;
