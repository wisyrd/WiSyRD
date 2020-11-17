import WidgetRenderer from './WidgetRenderer';

import { ThemeProvider } from 'emotion-theming'
<<<<<<< HEAD
import { Tiles } from '@rebass/layout'
import NotesWidget from './components/NotesWidget';

import theme from './components/Theme'

let widgets = [
  new BasicWidget({x: 7, children: "Hello"}),
  new AttackWidget({x: 6, children: "my"}),
  new InventoryWidget({x: 2, children: "baby!"}),
  new NotesWidget({x: 4, children: "Hello"}),
  new CombatWidget({x: 5, children: "my"}),
  new AttackWidget({x: 3, children: "honey!"}),
  new SkillWidget({x: 1, children: "Skills"})
]
=======
import theme from '@rebass/preset'
>>>>>>> dev

function App() {

  return (
    <ThemeProvider className="App" theme={theme}>
<<<<<<< HEAD
      <Tiles columns={[1, 2, 4]}>
        {renderWidgets(widgets)}
      </Tiles>
      <Attributes></Attributes>
=======
      <WidgetRenderer />
>>>>>>> dev
    </ThemeProvider>
  );
}

export default App;
