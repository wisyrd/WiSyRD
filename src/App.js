import WidgetRenderer from './WidgetRenderer';

import { ThemeProvider } from 'emotion-theming'

import theme from '@rebass/preset'


function App() {

  return (
    <ThemeProvider className="App" theme={theme}>
      <WidgetRenderer />
    </ThemeProvider>
  );
}

export default App;
