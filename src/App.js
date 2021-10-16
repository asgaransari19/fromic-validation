import FormicValidation from './components/FormicValidation';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { pagePaths } from '././utils/constant'
import Login from './components/LogIn'
import Page404 from './page/Page404'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact path={pagePaths.root} to={pagePaths.signin} />
          <Route path={pagePaths.signin} component={FormicValidation} />
          <Route path={pagePaths.login} component={Login} />
          <Route path={pagePaths.all} component={Page404} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
