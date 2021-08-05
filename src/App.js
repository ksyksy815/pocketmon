import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle.style'
import Navbar from './components/Navbar';
import Main from './pages/Main'
import List from './pages/List';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
