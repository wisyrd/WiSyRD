import BasicWidget from './components/BasicWidget';
import AttackWidget from './components/AttacksWidget';
import Widget from './components/Widget';
import renderWidgets from './WidgetRenderer';
import DoubleCheckbox from './components/DoubleCheckbox'
import SkillWidget from "./components/SkillWidget"

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Tiles } from '@rebass/layout'

let widgets = [
  new AttackWidget({x: 7, children: "Hello"}),
  new AttackWidget({x: 6, children: "my"}),
  new AttackWidget({x: 2, children: "baby!"}),
  new AttackWidget({x: 4, children: "Hello"}),
  new AttackWidget({x: 5, children: "my"}),
  new AttackWidget({x: 3, children: "honey!"})
]

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Tiles columns={[1, 2, 4]}>
        <ExampleWidget></ExampleWidget>
        
        {renderWidgets(widgets)}
        <DoubleCheckbox />
      </Tiles>
    </ThemeProvider>
  );
}

export default App;
