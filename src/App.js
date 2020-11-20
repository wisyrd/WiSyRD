import WidgetRenderer from './WidgetRenderer';
import Loginpage from './pages/loginpage'
import { ThemeProvider } from 'emotion-theming'

// import theme from '@rebass/preset'
import theme from './components/Theme'
import UserDashboard from './pages/UserDashboard';


function App() {

  return (
    <ThemeProvider className="App" theme={theme}>
      {/* <Loginpage /> */}
      <UserDashboard />
      {/* <WidgetRenderer apiURL={process.env.REACT_APP_API_URL || "https://lvh.me:8080/api/spells/"}/> */}
    </ThemeProvider>
  );
}

export default App;
