import React from 'react';
import MarkDownRender from './components/MarkDownRender';
import HomePage from './components/Home';
import NewEntry from "./components/NewEntry";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" exact component={MarkDownRender} />
        <Route path="/new" exact component={NewEntry} />

        {/*<Route exact path="/"  component={MainSection} />
         <Route exact path="/category" component={CategorySection} />
        <Route exact path="/article" component={ViewArticle} /> */}

    
    </Switch>

</Router>
    
  );
}

export default App;