import ExampleWidget from './components/ExampleWidget';
import Widget from './components/Widget';
import SkillWidget from "./components/SkillWidget";

function App() {
  return (
    <div className="App">
      <ExampleWidget>Hello World!</ExampleWidget>
      <ExampleWidget>Here is my second example widget</ExampleWidget>
      <SkillWidget>Skill Widget</SkillWidget>
    </div>
  );
}

export default App;
