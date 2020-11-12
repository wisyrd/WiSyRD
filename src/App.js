import ExampleWidget from './components/ExampleWidget';
import Widget from './components/Widget';
import SkillWidget from "./components/SkillWidget";

import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Tiles } from '@rebass/layout'

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Tiles columns={[1, 2, 4]}>
        <ExampleWidget>Hello World!</ExampleWidget>
        <ExampleWidget>Here is my second example widget</ExampleWidget>
        <ExampleWidget>Here is my second example widget</ExampleWidget>
        <ExampleWidget>Here is my second example widget</ExampleWidget>
        <SkillWidget></SkillWidget>
      </Tiles>
    </ThemeProvider>
  );
}

export default App;
