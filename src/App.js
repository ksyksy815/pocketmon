import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle.style'
import Navbar from './components/Navbar';
import Main from './pages/Main'
import List from './pages/List';

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <AppWrapper>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
