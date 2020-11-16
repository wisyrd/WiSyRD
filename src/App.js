import BasicWidget from './components/BasicWidget';
import ExampleWidget from './components/ExampleWidget'
import Attributes from './components/Attributes'
import AttackWidget from './components/AttacksWidget';
import InventoryWidget from './components/InventoryWidget';
import Widget from './components/Widget';
import renderWidgets from './WidgetRenderer';
import DoubleCheckbox from './components/DoubleCheckbox'
import SkillWidget from "./components/SkillWidget"
import CombatWidget from "./components/CombatStat"

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Tiles } from '@rebass/layout'
import NotesWidget from './components/NotesWidget';
import CombatStat from './components/CombatStat';
import ExplorationWidget from './components/ExplorationWidget';

let widgets = [
  new BasicWidget({x: 7, children: "Hello"}),
  new AttackWidget({x: 6, children: "my"}),
  new InventoryWidget({x: 2, children: "baby!"}),
  new NotesWidget({x: 4, children: "Hello"}),
  new CombatWidget({x: 5, children: "my"}),
  new AttackWidget({x: 3, children: "honey!"}),
  new SkillWidget({x: 1, children: "Skills"})
]

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Tiles columns={[1, 2, 4]}>
        {renderWidgets(widgets)}
        <ExplorationWidget />
      </Tiles>
      <Attributes></Attributes>
    </ThemeProvider>
  );
}

export default App;
