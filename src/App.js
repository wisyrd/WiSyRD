import WidgetRenderer from './WidgetRenderer';
import Loginpage from './pages/loginpage'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

// import theme from '@rebass/preset'
import theme from './components/Theme'
import Registrationpage from './pages/registrationpage';
import UserDashboard from './pages/UserDashboard';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
<<<<<<< HEAD
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
=======
    <ThemeProvider className="App" theme={theme}>
      {/* <LoginPage /> */}
      {/* <Registrationpage /> */}
      {/* <UserDashboard /> */}
      <WidgetRenderer apiURL={process.env.REACT_APP_API_URL || "https://lvh.me:8080/api/spells/"}/>
      <Registrationpage />
      {/* <UserDashboard />
      <WidgetRenderer apiURL={process.env.REACT_APP_API_URL || "https://lvh.me:8080/api/spells/"}/> */}
    </ThemeProvider>
>>>>>>> dev
  );
}

export default App;
