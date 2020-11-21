import WidgetRenderer from './WidgetRenderer';
import Loginpage from './pages/loginpage'
import { ThemeProvider } from 'emotion-theming'

// import theme from '@rebass/preset'
import theme from './components/Theme'
import Registrationpage from './pages/registrationpage';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/loginpage';


function App() {

  return (
    <ThemeProvider className="App" theme={theme}>
      {/* <LoginPage /> */}
      {/* <Registrationpage /> */}
      <UserDashboard />
      {/* <WidgetRenderer apiURL={process.env.REACT_APP_API_URL || "https://lvh.me:8080/api/spells/"}/> */}
    </ThemeProvider>
  );
}

export default App;
