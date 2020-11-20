import WidgetRenderer from './WidgetRenderer';
import Loginpage from './pages/loginpage'
import { ThemeProvider } from 'emotion-theming'

// import theme from '@rebass/preset'
import theme from './components/Theme'


function App() {

  return (
    <ThemeProvider className="App" theme={theme}>
      {/* <WidgetRenderer /> */}
      <Loginpage />
    </ThemeProvider>
  );
}

export default App;
