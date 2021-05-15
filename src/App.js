import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
        <div className ='container'>
                <Router>
                        <Switch>
                                <Route path ='/home'>
                                        <Home/>
                                </Route>
                                <Route  path ='/teamDetail/:teamsId'>
                                        <TeamDetails/>
                                </Route>
                                <Route exact path ='/'>
                                        <Home/>
                                </Route>
                                <Route path ='*'>
                                        <NoMatch/>
                                </Route>
                        </Switch>
                </Router>
        </div>
  );
}

export default App;
