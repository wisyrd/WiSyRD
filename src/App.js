import ExampleWidget from './components/ExampleWidget';
import Widget from './components/Widget';
import renderWidgets from './WidgetRenderer';

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Tiles } from '@rebass/layout'

let widgets = [
  new ExampleWidget({x: 7, children: "Hello"}),
  new ExampleWidget({x: 6, children: "my"}),
  new ExampleWidget({x: 2, children: "baby!"}),
  new ExampleWidget({x: 4, children: "Hello"}),
  new ExampleWidget({x: 5, children: "my"}),
  new ExampleWidget({x: 3, children: "honey!"})
]

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Tiles columns={[1, 2, 4]}>
        {renderWidgets(widgets)}
      </Tiles>
    </ThemeProvider>
  );
}

export default App;
