import BasicWidget from './components/BasicWidget';
import AttackWidget from './components/AttacksWidget';
import InventoryWidget from './components/InventoryWidget';
import Widget from './components/Widget';
import renderWidgets from './WidgetRenderer';
import DoubleCheckbox from './components/DoubleCheckbox'

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Tiles } from '@rebass/layout'

let widgets = [
  // new AttackWidget({x: 7, children: "Hello"}),
  // new AttackWidget({x: 6, children: "my"}),
  // new AttackWidget({x: 2, children: "baby!"}),
  new BasicWidget({x: 4, children: "Hello"}),
  new InventoryWidget({x: 5, children: "my"}),
  new AttackWidget({x: 3, children: "honey!"})
]

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Tiles columns={[1, 2, 4]}>
       
        
        {renderWidgets(widgets)}
        <DoubleCheckbox />
      </Tiles>
    </ThemeProvider>
  );
}

export default App;
