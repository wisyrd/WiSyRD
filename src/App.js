import WidgetRenderer from './WidgetRenderer';
import Loginpage from './pages/loginpage'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// import theme from '@rebass/preset'
import theme from './Theme'
import Registrationpage from './pages/registrationpage';
import UserDashboard from './pages/UserDashboard';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <Router>
      <ThemeProvider className="App" theme={theme}>
        <Switch>
          <Route exact path="/" component={Loginpage} />
          <Route exact path="/register" component={Registrationpage} />
          <Route path="/user/sheet" component={WidgetRenderer} />
          <Route path="/user" component={UserDashboard} />
          <Route component={ErrorPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
